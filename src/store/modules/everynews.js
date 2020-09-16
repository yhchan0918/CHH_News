import axios from "axios";
// Filter Function
var filter = ["urlToImage", "author", "description"];
function validateFilter(articles) {
  for (var key in filter) {
    if (articles[key === null]) {
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
  setNews: (state, news) => (state.news = news.filter(validateFilter)),
};

const actions = {
  async fetchNews({ commit }, value) {
    try {
      let response = await axios.get(`${state.apiUrl}`, {
        params: {
          q: value,
          apiKey: `${state.apiKey}`,
        },
      });
      console.log(response.data);
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
