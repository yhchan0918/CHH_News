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
      <v-container>
        <v-row justify="space-around" align="center">
          <v-col sm="6"
            ><router-link class="" to="/"
              ><p class="red--text my-2 text-h5 font-weight-bold d-block">
                CHH
              </p></router-link
            >
          </v-col>
          <v-col sm="6" v-if="$vuetify.breakpoint.smAndUp">
            <v-text-field
              v-if="!['SearchPage'].includes($route.name)"
              @click:append="search"
              v-model="searchField"
              style="width:100%;"
              append-icon="mdi-magnify"
              background-color="white"
              rounded
              dense
              outlined
              hide-details
              class="mx-4 "
              placeholder="Search"
            ></v-text-field>
          </v-col>
          <v-col cols="6" v-else class="text-right pa-0">
            <v-app-bar-nav-icon
              color="white"
              class="hidden-sm-and-up"
              @click.stop="drawer = !drawer"
            />
          </v-col>
        </v-row>
      </v-container>
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
