<template>
  <v-card max-width="344" class="mx-auto" height="450">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{
          topheadline.title
        }}</v-list-item-title>
        <v-list-item-subtitle>by {{ topheadline.author }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="topheadline.urlToImage" height="194"></v-img>

    <v-card-text>
      {{ topheadline.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn text color="deep-purple accent-4" :href="topheadline.url">
        Read
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn icon>
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
  data() {
    return {
      active: false,
    };
  },
  props: ["topheadline"],
};
</script>

<style></style>
