/**
 * Performs a request with any query string.
 * @param {string} query The query string.
 * @param {object} [variables] Object of variables. Keys must match variables in the query string.
 * @returns Promise containing the data in `res.data`.
 */
export const fetchQuery = async (
  query: string,
  variables?: Object
  cookie: string
): Promise<Object> => {
  const { NODE_ENV } = process.env;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
      Cookie: null;
    },
  };
  if (NODE_ENV === 'test')
    options.headers.Cookie = cookie;
  const url =
    NODE_ENV === 'test' ? 'http://localhost:3001/api/graphql' : '/api/graphql';
  const res = await fetch(url, options);
  const data = await res.json();
  if (NODE_ENV === 'test' && res.headers._headers['set-cookie']) {
    data.__cookie = res.headers._headers['set-cookie'].pop().split(';')[0];
  }
  return data;
};

/**
 * Logs in user.
 * @param {object} credentials Credentials
 * @param {string} credentials.email
 * @param {string} credentials.password
 * @returns Promise containing user id in `res.data.logIn`.
 */
export const logIn = async (credentials: Object): Promise<Object> => {
  const query = `query LogIn($input:LogInInput!){logIn(input:$input)}`;
  return fetchQuery(query, { input: credentials });
};

/**
 * Logs out user.
 * @returns Promise containing null in `res.data.logOut`.
 */
export const logOut = async (): Promise<Object> => {
  const query = `query LogOut{logOut}`;
  return fetchQuery(query);
};
