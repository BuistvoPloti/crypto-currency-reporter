import json
from decimal import Decimal


def parse_response_to_json(response):
  data_json = json.loads(response.text)
  return json.loads(json.dumps(data_json), parse_float=Decimal)


def transform_currency_item(params):
  return {
    **params['currency'],
    'id': params['currency_code']
  }
