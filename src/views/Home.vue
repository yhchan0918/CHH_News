<template>
  <div>
    <v-container>
      <h1 class="">Top Headline</h1>
      <v-row>
        <v-col>
          <NewsDisplay :topheadlines="allTopHeadlines" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NewsDisplay from "@/components/NewsDisplay.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchTopHeadlines"]),
  },
  computed: mapGetters(["allTopHeadlines"]),
  created() {
    this.fetchTopHeadlines();
  },
  components: {
    NewsDisplay,
  },
};
</script>
