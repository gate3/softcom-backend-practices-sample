const successResponse = (responseObject, data = null, message = '', returnData = false) => {
  const result = {
    status: true,
    message,
    data,
  };
  return returnData === true ? result : responseObject.json(result);
};

const errorResponse = (responseObject, errorObject, returnData = false) => {
  const message = errorObject.message ? errorObject.message : 'An error occurred';
  let statCode = 400;
  if (errorObject.status != null) {
    statCode = errorObject.status ? errorObject.status : 400;
    delete statCode.status;
  }
  if (errorObject.level != null && errorObject.service != null) {
    delete statCode.level;
    delete statCode.service;
  }
  const result = {
    status: false,
    message,
    data: errorObject,
  };
  return returnData === true ? result : responseObject.status(statCode).json(result);
};

module.exports = {
  errorResponse,
  successResponse,
};
