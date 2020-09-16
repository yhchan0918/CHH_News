<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            @click:append="fetchNews(searchField)"
            v-model="searchField"
            append-icon="mdi-magnify"
            background-color="white"
            rounded
            outlined
            flat
            hide-details
            class="mx-4 "
            label="Search"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" v-for="news in allNews" :key="news.title">
          <HorizontalCard :news="news" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import HorizontalCard from "@/components/HorizontalCard.vue";
export default {
  name: "SeachPage",
  data() {
    return {
      searchField: "",
    };
  },
  methods: {
    ...mapActions(["fetchNews"]),
  },
  computed: mapGetters(["allNews"]),
  components: {
    HorizontalCard,
  },
};
</script>
