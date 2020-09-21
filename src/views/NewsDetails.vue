<template>
  <section>
    <div v-for="topNew in topNews" :key="topNew.title">
      {{ topNew.title }}
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "NewsDetails",
  data() {
    return {
      topNews: null,
    };
  },
  props: {
    category: {
      type: String,
    },
  },
  computed: {
    ...mapState("topheadlines", {
      apiUrl: (state) => state.apiUrl,
      apiKey: (state) => state.apiKey,
    }),
  },
  methods: {
    async fetchSpecificNews() {
      try {
        let response = await axios.get(`${this.apiUrl}`, {
          params: {
            apiKey: `${this.apiKey}`,
            country: "us",
            category: this.category,
          },
        });

        this.topNews = response.data.articles;
        console.log(this.topNews);
      } catch (err) {
        console.log(err);
      }
    },
  },

  created() {
    this.fetchSpecificNews();
  },
};
</script>

<style></style>
