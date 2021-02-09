from ..services.dynamodb.currencies import get_currencies
from ..utils.response_helpers import *


def handler(event, context):
  try:
    currencies = get_currencies()
    return handle_success_response(currencies)
  except:
    return handle_error_response()
