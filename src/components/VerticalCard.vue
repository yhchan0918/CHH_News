<template>
  <v-card
    flat
    outlined
    width="500"
    class=""
    height="100%"
    style="position: relative;padding-bottom: 50px;"
  >
    <v-img :src="news.urlToImage" height="280"></v-img>
    <v-list-item class="">
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">{{
          news.title
        }}</v-list-item-title>
        <v-list-item-subtitle>by {{ news.author }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      {{ news.description }}
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions
      style="position: absolute;
              bottom: 0;"
    >
      <v-btn text color="#EF5350" :href="news.url">
        Read
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="active = !active" v-if="!active" icon>
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn @click="active = !active" v-else color="pink lighten-1" icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "TheCard",
  data() {
    return {
      active: false,
    };
  },
  props: {
    news: {
      type: Object,
    },
  },
};
</script>

<style>
.v-list-item__title {
  white-space: normal !important;
}
</style>
