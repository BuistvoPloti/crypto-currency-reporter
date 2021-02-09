import requests
from ...config import coindesk_config


def fetch_price_currency(resource):
  return requests.get(f"{coindesk_config['url']}/{resource}.json")
