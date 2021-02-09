const currenciesService = require("../services/dynamodb/currencies");
const {
  handleSuccessResponse,
  handleErrorResponse
} = require("../utils/response-helpers");

module.exports.handler = async () => {
  try {
    const currencies = await currenciesService.getCurrencies();
    return handleSuccessResponse(currencies);
  } catch (err) {
    return handleErrorResponse(err.message, 404);
  }
};
