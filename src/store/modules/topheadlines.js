import axios from "axios";
const state = {
  topheadlines: [],
  apiUrl: "https://newsapi.org/v2/top-headlines",
  apiKey: process.env.VUE_APP_API_KEY,
};
const getters = {
  allTopHeadlines: (state) => state.topheadlines,
};

const mutations = {
  setTopHeadlines: (state, topheadlines) =>
    (state.topheadlines = topheadlines.filter(
      (article) => article.description && article.urlToImage && article.author
    )),
};

const actions = {
  async fetchTopHeadlines({ commit }) {
    const response = await axios.get(`${state.apiUrl}`, {
      params: {
        apiKey: `${state.apiKey}`,
        country: "us",
      },
    });
    console.log(response.data);
    commit("setTopHeadlines", response.data.articles);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
