const handleSuccessResponse = (data, code) => {
  const httpCode = code || 200;
  let response = {
    status: "success",
    httpCode
  };
  response = data && { ...response, data };
  return response;
};

const handleErrorResponse = (error, code) => {
  const httpCode = code || 500;
  return {
    httpCode,
    status: "failed",
    error: error.message || "Internal server error",
  };
};

module.exports = {
  handleSuccessResponse,
  handleErrorResponse
};
