import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "@/api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(res => {
        console.log(res.data);
        context.commit("SET_NEWS", res.data);
        return res;
      })
      .catch();
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(res => {
        console.log(res.data);
        commit("SET_ASK", res.data);
      })
      .catch();
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(res => {
        console.log(res.data);
        commit("SET_JOBS", res.data);
      })
      .catch();
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch();
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch();
  },
  FETCH_LIST({ commit }, pageName) {
    console.log("pageName :" + pageName);
    fetchList(pageName)
      .then(({ data }) => {
        commit("SET_LIST", data);
      })
      .catch();
  }
};
