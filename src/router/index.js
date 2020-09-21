import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewsDetails from "../views/NewsDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news/:category",
    name: "NewsDetails",
    component: NewsDetails,
    props: true,
  },
  {
    path: "/searchpage",
    name: "SearchPage",

    component: () =>
      import(/* webpackChunkName: "searchpage" */ "../views/SearchPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
