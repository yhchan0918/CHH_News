<template>
  <nav>
    <v-navigation-drawer color="primary" temporary dark app v-model="drawer">
      <v-list dense>
        <v-list-item
          class="my-3"
          v-for="nav in navItems"
          :key="nav.text"
          link
          :to="nav.route"
        >
          <v-list-item-content>
            <v-list-item-title class="white--text text-caption">{{
              nav.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--NAVBAR when at smaller screen-->
    <v-app-bar color="primary" app v-if="isSm">
      <v-container>
        <v-row align="center">
          <v-col sm="8">
            <v-row align="center"
              ><router-link to="/"
                ><span
                  class="red--text my-2 text-h5 font-weight-bold d-inline-block"
                >
                  CHH
                </span></router-link
              >
            </v-row>
          </v-col>

          <v-col cols="6" class="text-right pa-0">
            <v-app-bar-nav-icon
              color="white"
              class="hidden-sm-and-up"
              @click.stop="drawer = !drawer"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <!--NAVBAR when at smaller screen ended here-->
    <!--NAVBAR when at larger screen-->
    <v-app-bar color="primary" app v-else>
      <v-container>
        <v-row align="center">
          <v-col sm="9">
            <v-row align="center"
              ><router-link to="/"
                ><span
                  class="red--text my-2 pr-4 text-h5 font-weight-bold d-inline-block"
                >
                  CHH
                </span></router-link
              >

              <span class="mx-0" v-for="nav in navItems" :key="nav.text">
                <v-btn
                  style="font-size:10px;"
                  small
                  class="white--text text-caption py-0 my-0"
                  :to="nav.route"
                  text
                >
                  {{ nav.text }}
                </v-btn>
              </span></v-row
            >
          </v-col>
          <v-col sm="3">
            <v-text-field
              v-if="!['SearchPage'].includes($route.name)"
              @click:append="search"
              v-model="searchField"
              style="width:250px"
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
        </v-row>
      </v-container>
    </v-app-bar>
    <!--NAVBAR when at larger screen ended here-->
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isSm: false,
      drawer: false,
      searchField: "",
      navItems: [
        { text: "Business", route: "/news/business" },
        { text: "Entertainment", route: "/news/entertainment" },
        { text: "Health", route: "/news/health" },
        { text: "Science", route: "/news/science" },
        { text: "Sports", route: "/news/sports" },
        { text: "Technology", route: "/news/technology" },
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
    onResize() {
      this.isSm = window.innerWidth < 960;
    },
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

<style></style>
