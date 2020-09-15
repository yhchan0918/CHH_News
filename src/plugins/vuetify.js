import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#000000",
        secondary: "#EF5350",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
export default vuetify;
