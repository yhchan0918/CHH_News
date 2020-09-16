<template>
  <section>
    <v-divider></v-divider>
    <v-card flat width="100%" class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="5">
            <v-img height="250" width="400" :src="news.urlToImage"></v-img>
          </v-col>

          <v-col cols="7" class="text-left pt-0 mb-0 ">
            <v-row class="flex-column ma-0 pa-0 fill-height">
              <v-col class="text-h6">
                {{ news.title }}
              </v-col>
              <v-col class="text-caption">
                {{ news.publishedAt }}
              </v-col>
              <v-col class="text-body-2">
                {{ news.description }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-divider></v-divider>
  </section>
</template>

<script>
export default {
  name: "HorizontalCard",
  props: {
    news: {
      type: Object,
    },
  },
};
</script>

<style></style>
