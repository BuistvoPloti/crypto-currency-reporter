import random
from ..services.currencies_api.coindesk import fetch_price_currency
from ..services.dynamodb.currencies import put_currency
from ..utils.currencies_list import currencies
from ..utils.object_helpers import parse_response_to_json


def handler(event, context):
  currency_param = random.choice(currencies)
  response = fetch_price_currency(currency_param)
  currency = parse_response_to_json(response)
  params = {
    'currency_code': currency_param,
    'currency': currency,
  }
  return put_currency(params)
