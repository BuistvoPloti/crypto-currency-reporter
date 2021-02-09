const AWS = require("aws-sdk");
const { dynamodbConfig: { region } } = require("../../config");

const ddb = new AWS.DynamoDB.DocumentClient({
  region
});

module.exports = ddb;
