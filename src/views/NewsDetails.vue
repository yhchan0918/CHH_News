<template>
  <section>
    <v-container>
      <h1 class="text-capitalize text-h3">{{ category }}</h1>
      <v-divider class="my-4"></v-divider>
      <!--First Section -->
      <v-row>
        <v-col
          class="mb-0 pb-0"
          style="width:50%;"
          v-for="first in topNews.slice(0, 1)"
          :key="first.title"
          cols="12"
        >
          <v-card flat :href="first.url">
            <v-img
              position="center"
              max-width="100%"
              :src="first.urlToImage"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="600px"
            >
              <v-card-title v-text="first.title" class="text-h4"></v-card-title>
            </v-img>
          </v-card>
          <v-divider class="mt-5 pb-0"></v-divider>
        </v-col>
        <!--Second Section -->
        <v-col
          class="my-0 py-0"
          cols="12"
          v-for="secondSection in topNews.slice(1, 7)"
          :key="secondSection.title"
        >
          <v-list class="my-0 py-0" dense>
            <v-list-item :href="secondSection.url" class="d-flex align-center">
              <v-list-item-content>
                <v-list-item-title
                  v-text="secondSection.title"
                  class="text-body-1"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
    <!--Third Section -->
    <v-row style="background-color:black;">
      <v-col cols="12"
        ><h2 class="white--text ml-2  text-h4">Featured</h2></v-col
      >
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="thirdSection in topNews.slice(7, 16)"
        :key="thirdSection.title"
      >
        <v-card flat :href="thirdSection.url">
          <v-img
            :src="thirdSection.urlToImage"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="280px"
          >
            <v-card-title v-text="thirdSection.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "NewsDetails",
  data() {
    return {
      topNews: [],
    };
  },
  props: {
    category: {
      type: String,
    },
  },

  methods: {
    async fetchSpecificNews() {
      try {
        let response = await axios.get(
          `${this.$store.state.topheadlines.apiUrl}`,
          {
            params: {
              apiKey: `${this.$store.state.topheadlines.apiKey}`,
              country: "us",
              category: this.category,
              pageSize: 40,
            },
          }
        );

        this.topNews = response.data.articles;
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
