const ddb = require("../../utils/db/init-ddb.js");
const { dynamodbConfig: { bpiTableName } } = require("../../config");

const putCurrency = async ({ priceCurrency, currencyCode }) => {
  const extParams = {
    TableName: bpiTableName,
    Item: {
      id: currencyCode,
      ...priceCurrency.data
    }
  };
  return ddb.put(extParams).promise();
};

const getCurrencies = async (
  params = { TableName: bpiTableName },
  allData = []
) => {
  const data = await ddb.scan(params).promise();
  return (data.LastEvaluatedKey)
    ? getCurrencies(
      { ...params, ExclusiveStartKey: data.LastEvaluatedKey },
      [...allData, ...data.Items]
    )
    : [...allData, ...data.Items];
};

module.exports = {
  putCurrency,
  getCurrencies
};
