import boto3
from ...config import dynamodb_config
from ...utils.object_helpers import transform_currency_item
dynamodb = boto3.resource('dynamodb')


def get_currencies():
  table = dynamodb.Table(dynamodb_config['tableName'])
  response = table.scan()
  data = response['Items']
  while 'LastEvaluatedKey' in response:
    response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
    data.extend(response['Items'])
  return response['Items']


def put_currency(params):
  item = transform_currency_item(params)
  table = dynamodb.Table(dynamodb_config['tableName'])
  return table.put_item(Item=item)

