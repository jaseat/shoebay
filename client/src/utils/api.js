/**
 * Performs a request with any query string.
 * @param {string} query The query string.
 * @param {object} [variables] Object of variables. Keys must match variables in the query string.
 * @returns Promise containing the data.
 */
export const fetchQuery = async (
  query: string,
  variables?: Object
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
      credentials: 'same-origin',
    },
  };
  const url = '/api/graphql';

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    if (data.errors) {
      const errors = data.errors.map(e => ({ message: e.message }));
      console.log(errors);
      throw errors;
    }
    return data;
  } catch (e) {
    throw e;
  }
};

/**
 * Logs in user.
 * @param {object} credentials Credentials
 * @param {string} credentials.email
 * @param {string} credentials.password
 * @returns Promise containing a response of the user's id or
 * error array with message 'Unauthorized` in first message if credentials are wrong.
 */
export const logIn = async (credentials: Object): Promise<Object> => {
  const query = `query LogIn($input:LogInInput!){logIn(input:$input)}`;
  try {
    const data = await fetchQuery(query, { input: credentials });
    return data.data.logIn;
  } catch (e) {
    throw e;
  }
};

/**
 * Logs out user.
 * @returns Promise containing null in response.
 */
export const logOut = async (): Promise<Object> => {
  const query = `query LogOut{logOut}`;
  try {
    const data = await fetchQuery(query);
    return data.data.logOut;
  } catch (e) {
    throw e;
  }
};
