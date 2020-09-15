<template>
  <div>
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="(topheadline, index) in topheadlines"
        :key="index"
      >
        <TheCard :news="topheadline" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TheCard from "@/components/TheCard.vue";
export default {
  name: "NewsDisplay",
  props: ["topheadlines"],
  components: {
    TheCard,
  },
};
</script>

<style></style>
