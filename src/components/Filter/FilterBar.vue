<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Sort By
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group @change="filterNew()" v-model="sortBy">
            <v-radio
              v-for="(filter, index) in filters"
              :key="index"
              :label="filter.option"
              :value="filter.value"
            ></v-radio>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterBar",
  data() {
    return {
      sortBy: "publishedAt",
      filters: [
        { option: "Most Recent", value: "publishedAt" },
        { option: "Most Relevant", value: "relevancy" },
        { option: "Most Popular", value: "popularity" },
      ],
    };
  },
  methods: {
    ...mapActions("everynews", ["filterNews"]),
    filterNew() {
      var req = [this.$route.query.q, this.sortBy];
      console.log(req);
      this.filterNews(req);
    },
  },
};
</script>

<style></style>
