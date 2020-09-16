import Vue from "vue";
import Vuex from "vuex";
import topheadlines from "./modules/topheadlines";
import everynews from "./modules/everynews";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    topheadlines,
    everynews,
  },
});
