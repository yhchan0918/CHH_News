import axios from "axios";
// Filter Function
var key = ["urlToImage", "author", "description"];
function validateFilter(articles) {
  for (var i = 0; i < articles.length; i++) {
    if (articles[key[i]] === null) {
      return false;
    }
  }
  return true;
}
const state = {
  news: [],
  apiUrl: "https://newsapi.org/v2/everything",
  apiKey: "fa9b477d367d459da5258d5da851ccb2",
};
const getters = {
  allNews: (state) => state.news,
};

const mutations = {
  setNews: (state, news) =>
    (state.news = news
      .filter(validateFilter)
      .filter(
        (v, i, a) =>
          a.findIndex(
            (t) => t.title === v.title && t.urlToImage === v.urlToImage
          ) === i
      )),
};

const actions = {
  async fetchNews({ commit }, query) {
    try {
      let response = await axios.get(`${state.apiUrl}`, {
        params: {
          q: query,
          apiKey: `${state.apiKey}`,
        },
      });

      commit("setNews", response.data.articles);
    } catch (err) {
      console.log(err);
      commit("setNews", []);
    }
  },
  async filterNews({ commit }, query, value) {
    try {
      let response = await axios.get(`${state.apiUrl}`, {
        params: {
          q: query,
          sortBy: value,
          apiKey: `${state.apiKey}`,
        },
      });
      console.log("successfuly filtered", response.data);
      commit("setNews", response.data.articles);
    } catch (err) {
      console.log(err);
      commit("setNews", []);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
