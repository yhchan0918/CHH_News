<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            @click:append="searchSync()"
            v-model="searchField"
            append-icon="mdi-magnify"
            background-color="white"
            rounded
            outlined
            flat
            hide-details
            clearable
            placeholder="Search"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols><FilterBar /></v-col>
        <v-col cols="12" v-for="(news, index) in allNews" :key="index">
          <HorizontalCard :news="news" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import FilterBar from "@/components/Filter/FilterBar.vue";
import HorizontalCard from "@/components/HorizontalCard.vue";
export default {
  name: "SeachPage",
  data() {
    return {
      searchField: "",
    };
  },
  methods: {
    ...mapActions("everynews", ["fetchNews"]),
    searchSync() {
      this.$router
        .push({
          name: "SearchPage",
          query: { q: this.searchField },
        })
        .catch((err) => {
          if (
            err.name !== "NavigationDuplicated" &&
            !err.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            // But print any other errors to the console
            console.log(err);
          }
        });
      this.fetchNews(this.$route.query.q);
    },
    checkSearch() {
      if (this.$route.query.q != "") {
        this.searchField = this.$route.query.q;
        this.fetchNews(this.$route.query.q);
      }
    },
  },
  mounted() {
    this.checkSearch();
  },
  computed: mapGetters("everynews", ["allNews"]),
  components: {
    HorizontalCard,
    FilterBar,
  },
};
</script>
