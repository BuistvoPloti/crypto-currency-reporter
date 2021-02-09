exports.coindeskConfig = {
  baseUrl: "https://api.coindesk.com",
  path: "v1/bpi/currentprice",
  resourceTypeJson: ".json",
};

exports.dynamodbConfig = {
  bpiTableName: "BTCPriceIndex",
  region: "us-east-2"
};
