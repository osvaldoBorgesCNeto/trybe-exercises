const fetch = require('node-fetch');
const endpoint = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"

const coinDeskAPI = async () => {
  try {
    const response = await fetch(endpoint);
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  }
};

module.exports = coinDeskAPI;