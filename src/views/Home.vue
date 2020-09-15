<template>
  <div>
    <v-container>
      <h1>Top Headline</h1>
      <v-row>
        <v-col sm="3" offset-lg="1"><SideBar /></v-col>
        <v-col sm="9" lg="7">
          <NewsDisplay :topheadlines="allTopHeadlines" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NewsDisplay from "@/components/NewsDisplay.vue";
import SideBar from "@/components/Filter/SideBar.vue";
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
    SideBar,
  },
};
</script>
