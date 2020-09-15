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
      <v-btn text color="red" class="white--text text-h5 font-weight-bold"
        >CHH News</v-btn
      >
      <v-spacer></v-spacer>

      <v-text-field
        v-model="searchField"
        append-icon="mdi-magnify"
        background-color="white"
        rounded
        flat
        hide-details
        class="mx-4 "
        label="Search"
      ></v-text-field>
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
      searchField: "",
    };
  },
};
</script>

<style></style>
