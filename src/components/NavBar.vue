<template>
  <nav>
    <v-navigation-drawer
      color="primary"
      absolute
      temporary
      app
      v-model="drawer"
    >
    </v-navigation-drawer>

    <v-app-bar color="primary" app class="">
      <p to="/" class="red--text my-2 text-h5 font-weight-bold">CHH News</p>
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-magnify</v-icon>
      <v-app-bar-nav-icon
        color="white"
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style></style>
