const searchParameters = {
  search: ‘Вася’,
  take: 10
}

function querySearch(searchParameters) {
  const keys = Object.keys(searchParameters);
  const params = keys.map(key => `${key}=${searchParameters[key]}`);
  return params.join('&');
}