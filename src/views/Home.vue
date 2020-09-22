<template>
  <div>
    <v-container>
      <h1 class="text-capitalize text-h3">Top Headline</h1>
      <v-divider class="my-4"></v-divider>
      <v-row class="mt-0 pt-0">
        <v-col class="mt-0 pt-0">
          <TopHeadlinesDisplay :topheadlines="allTopHeadlines" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TopHeadlinesDisplay from "@/components/TopHeadlinesDisplay.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions("topheadlines", ["fetchTopHeadlines"]),
  },
  computed: mapGetters("topheadlines", ["allTopHeadlines"]),
  created() {
    this.fetchTopHeadlines();
  },
  components: {
    TopHeadlinesDisplay,
  },
};
</script>
