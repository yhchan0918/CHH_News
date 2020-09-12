<template>
  <div>
    <v-row>
      <v-col
        sm="4"
        v-for="topheadline in allTopHeadlines"
        :key="topheadline.title"
      >
        <TheCard :topheadline="topheadline" />
      </v-col>
    </v-row>
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
