import axios from "axios";
const state = {
  topheadlines: [],
  apiUrl: "https://newsapi.org/v2/top-headlines",
  apiKey: "fa9b477d367d459da5258d5da851ccb2",
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
  state,
  getters,
  actions,
  mutations,
};
