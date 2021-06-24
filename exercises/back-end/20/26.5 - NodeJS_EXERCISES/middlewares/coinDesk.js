const coinDeskAPI = require('../Api/coinDeskAPI');
const rescue = require("express-rescue");

const coinDesk = rescue(async (req, res, next) => {
  const response = await coinDeskAPI();

  if (response.message) {
    return res.status(404).json({ "message": response.message });
  };

  return res.status(200).json(response);
});

module.exports = coinDesk;
