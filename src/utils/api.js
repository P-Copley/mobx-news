import axios from 'axios';

const BASE_URL = 'https://nc-knews-api-example.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async topic => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: {
      topic
    }
  });
  return data.articles;
};

export const getArticle = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const postArticle = async article => {
  if (!article.title || !article.body)
    return Promise.reject({
      status: 400,
      msg: 'Article needs a title and a body!'
    });
  const { data } = await axios.post(`${BASE_URL}/articles`, article);
  return data;
};

export const vote = async (id, inc_votes, section) => {
  const { data } = await axios.patch(`${BASE_URL}/${section}/${id}`, {
    inc_votes
  });
  return data.article;
};
