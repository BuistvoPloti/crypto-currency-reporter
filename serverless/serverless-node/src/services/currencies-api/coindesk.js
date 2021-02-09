const axios = require("axios");
const {
  coindeskConfig: {
    baseUrl,
    path,
    resourceTypeJson
  }
} = require("../../config");

const fetchPriceCurrency = async (resource) => {
  return axios.get(`${baseUrl}/${path}/${resource}${resourceTypeJson}`);
};

module.exports = {
  fetchPriceCurrency
};
