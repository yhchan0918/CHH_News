import axios from "axios";
// Filter Function
var key = ["urlToImage", "author", "description", "title"];
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
  apiKey: process.env.VUE_APP_API_KEY,
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
  async fetchNews({ commit }, search) {
    try {
      let response = await axios.get(`${state.apiUrl}`, {
        params: {
          qInTitle: search,
          sortBy: "relevancy",
          apiKey: `${state.apiKey}`,
          language: "en",
        },
      });
      console.log("fetchnews", response.data.articles);
      commit("setNews", response.data.articles);
    } catch (err) {
      console.log(err);
      commit("setNews", []);
    }
  },
  async filterNews({ commit }, arr) {
    try {
      let response = await axios.get(`${state.apiUrl}`, {
        params: {
          qInTitle: arr[0],
          sortBy: arr[1],
          language: "en",
          apiKey: `${state.apiKey}`,
        },
      });
      console.log("successfuly filtered", response.data.articles);
      commit("setNews", response.data.articles);
    } catch (err) {
      console.log(err);
      commit("setNews", []);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
