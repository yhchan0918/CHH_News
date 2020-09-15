<template>
  <div>
    <v-container fluid class="fill-height">
      <h1>Top Headline</h1>
      <v-row align="center">
        <v-col
          sm="4"
          v-for="topheadline in allTopHeadlines"
          :key="topheadline.title"
        >
          <TheCard :topheadline="topheadline" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TheCard from "@/components/TheCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data: () => ({
    cards: [{ flex: 12 }, { flex: 6 }, { flex: 6 }],
  }),
  methods: {
    ...mapActions(["fetchTopHeadlines"]),
  },
  computed: mapGetters(["allTopHeadlines"]),
  created() {
    this.fetchTopHeadlines();
  },
  components: {
    TheCard,
  },
};
</script>
