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
        <v-row align="center">
          <v-col sm="8">
            <router-link to="/"
              ><span
                class="red--text my-2 text-h5 font-weight-bold d-inline-block"
              >
                CHH
              </span></router-link
            >
            <v-row v-if="$vuetify.breakpoint.smAndUp" align="center">
              <span class="mx-0" v-for="nav in navItems" :key="nav.text">
                <v-btn class="white--text text-caption" :to="nav.route" text>
                  {{ nav.text }}
                </v-btn>
              </span></v-row
            >
          </v-col>
          <v-col sm="4" v-if="$vuetify.breakpoint.smAndUp">
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
      navItems: [
        { text: "Business", route: "/business" },
        { text: "Entertainment", route: "/entertainment" },
        { text: "General", route: "/general" },
        { text: "Health", route: "/health" },
        { text: "Science", route: "/science" },
        { text: "Sports", route: "/sports" },
        { text: "Technology", route: "/technology" },
      ],
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
