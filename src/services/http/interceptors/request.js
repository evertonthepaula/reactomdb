function request(config) {
  // eslint-disable-next-line no-param-reassign
  config.params = {
    apikey: localStorage.getItem('publicKey'),
  };

  return config;
}

function error(errorRes) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(errorRes);
}

export default {
  request,
  error,
};
