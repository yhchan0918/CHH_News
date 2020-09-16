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
      <router-link to="/"
        ><p class="red--text my-2 text-h5 font-weight-bold d-block">
          CHH
        </p></router-link
      >
      <v-spacer></v-spacer>
      <v-text-field
        v-if="!['SearchPage'].includes($route.name)"
        @click:append="search"
        v-model="searchField"
        style="width:10%;"
        append-icon="mdi-magnify"
        background-color="white"
        rounded
        dense
        outlined
        hide-details
        class="mx-4 "
        placeholder="Search"
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
  methods: {
    search() {
      this.$router.push({
        path: "searchpage",
        query: { q: this.searchField },
      });
      this.searchField = "";
    },
  },
};
</script>

<style></style>
