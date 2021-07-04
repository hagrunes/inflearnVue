import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

let fetchNewsList = () => {
  return axios.get(`${config.baseUrl}news/1.json`);
};
let fetchAskList = () => {
  return axios.get(`${config.baseUrl}ask/1.json`);
};
let fetchJobsList = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`);
};
let fetchList = pageName => {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
};

let fetchUserInfo = username => {
  return axios.get(`${config.baseUrl}user/${username}.json`);
};

let fetchCommentItem = id => {
  return axios.get(`${config.baseUrl}item/${id}.json`);
};

export {
  fetchNewsList,
  fetchList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem
};
