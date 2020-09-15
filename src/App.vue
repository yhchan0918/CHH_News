<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container fluid class="fill-height">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
