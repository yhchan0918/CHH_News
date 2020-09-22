<template>
  <div>
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="(topheadline, index) in topheadlines.slice(0, -2)"
        :key="index"
      >
        <VerticalCard :news="topheadline" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VerticalCard from "@/components/VerticalCard.vue";
export default {
  name: "NewsDisplay",
  props: ["topheadlines"],
  components: {
    VerticalCard,
  },
};
</script>

<style></style>
