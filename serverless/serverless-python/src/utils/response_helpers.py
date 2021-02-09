def handle_success_response(data, code=200):
    return {'httpCode': code, 'data': data}


def handle_error_response(error="Internal server error", code=500):
    return {'httpCode': code, 'error': error}
