/**
 * Performs a request with any query string.
 * @param {string} query The query string.
 * @param {object} variables Object of variables. Keys much match variables in the query string.
 * @returns Promise containing the object.
 */
export const fetchQuery = async (
  query: string,
  variables: Object
): Promise<Object> => {
  console.log(
    JSON.stringify({
      query: query,
      variables,
    })
  );
  const options = {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
  };
  const res = await fetch('api/graphql', options);
  const data = await res.json();
  return data;
};
