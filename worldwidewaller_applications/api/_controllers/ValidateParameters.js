/**
 * Given a list of parameters, validate that they exist in the request and return
 * an object with nothing but those required.
 * May expand this further to do additional checking on the parameters (numbers vs strings, etc)
 */
const validateParameters = (params, req) => {
  const returnedRequest = {};
  const errors = [];
  params.forEach((param) => {
    const value = req[param];
    if (!value) errors.push(`${param} does not exist.`);
    else returnedRequest[param] = req[param];
  });

  return {
    ...returnedRequest,
    errors,
  };
};

export default validateParameters;
