const _ = require("lodash");
const { currencies } = require("../utils/currencies-list");
const currenciesApiService = require("../services/currencies-api/coindesk");
const currenciesService = require("../services/dynamodb/currencies");

module.exports.handler = async () => {
  const currencyParam = _.sample(currencies);
  try {
    const priceCurrency = await currenciesApiService
      .fetchPriceCurrency(currencyParam);
    const currencyCode = _.get(
      priceCurrency,
      `data.bpi[${currencyParam}].code`
    );
    const params = {
      currencyCode,
      priceCurrency
    };
    return await currenciesService.putCurrency(params);
  } catch (err) {
    return err;
  }
};
