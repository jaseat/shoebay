const isomorphicFetch = require('isomorphic-fetch');

let __cookie = null;
global.fetch = async function(_, options) {
  if (__cookie) {
    options = {
      method: 'POST',
      body: options.body,
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        credentials: 'same-origin',
        Cookie: __cookie,
      },
    };
  }
  const res = await isomorphicFetch(
    'http://localhost:3001/api/graphql',
    options
  );
  const setCookie = res.headers.get('set-cookie');
  if (setCookie) __cookie = setCookie.substr(0, setCookie.indexOf(';'));
  return res;
};
