/**
 * Performs a request with any query string.
 * @param {string} query The query string.
 * @param {object} [variables] Object of variables. Keys must match variables in the query string.
 * @returns Promise containing the data.
 */
export const fetchQuery = async (
  query: string,
  variables: ?Object
): Promise<Object> => {
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
    credentials: 'same-origin',
  };
  const url = '/api/graphql';

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    if (data.errors) {
      const errors = flattenErrors(data.errors);
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

/**
 * @typedef {object} User
 * @property {string} username
 * @property {string} email
 * @property {string} password
 */

/**
 * Creates new user and returns that user's information.
 * @param {User} newUser New user config.
 * @param {strings[]} [fields] Optional array of strings specifying which aditional return data to include.
 * @returns A promise containing the new user's information.
 */
export const signUp = async (newUser, fields = ['']): Promise<Object> => {
  const query = `mutation SignUp($input: UserInput!){createUser(input:$input){id,${fields}}}`;
  try {
    const data = await fetchQuery(query, { input: newUser });
    return data.data.createUser;
  } catch (e) {
    throw e;
  }
};

// query RecentArticles(${first ? '$first:Int' : ''} ${
//   after ? '$after:String' : ''
// }){
//   search{
//     recentArticles(${first ? 'first:$first' : ''} ${
//   after ? 'after:$after' : ''
// }){

// query RecentArticles($first:Int $after:String){
//   search{
//     recentArticles(first:$first,after:$after){

export const getRecentArticles = async (first = null, after = null) => {
  const query = `
  query RecentArticles($first:Int = null $after:String = null){
    search{
      recentArticles(first:$first,after:$after){
        pageInfo{
          hasNextPage
          endCursor
        }
        edges{
          cursor
          node{
            author{
              username
            }
            id
            title
            shortText
            createdAt
          }
        }
      }
  }
}`;
  try {
    const res = await fetchQuery(query, { first, after });
    const data = res.data.search.recentArticles;
    return data;
  } catch (e) {
    throw e;
  }
};

export const getUserArticles = async (id, first = null, after = null) => {
  const query = `
  query RecentArticles($first:Int = null $after:String = null){
    node(id:"${id}"){
      ...on User{
        articles(first:$first,after:$after){
          pageInfo{
            hasNextPage
            endCursor
          }
          edges{
            cursor
            node{
              id
              title
            }
          }
        }
      }
    }
}`;
  try {
    const res = await fetchQuery(query, { first, after });
    const data = res.data.node.articles;
    return data;
  } catch (e) {
    throw e;
  }
};

export const postArticle = async newArticle => {
  const query = `
  mutation PostArticle($input:ArticleInput!){
    createArticle(input:$input){
      id
    }
  }
  `;
  try {
    const res = await fetchQuery(query, { input: newArticle });
    const data = res.data.createArticle;
    return data;
  } catch (e) {
    throw e;
  }
};

export const postComment = async newComment => {
  const query = `
  mutation PostComment($input:CommentInput!){
    createComment(input:$input){
      id
    }
  }
  `;
  try {
    const res = await fetchQuery(query, { input: newComment });
    const data = res.data.createComment;
    return data;
  } catch (e) {
    throw e;
  }
};

function flattenErrors(errors) {
  const err = [];
  errors.forEach(e => {
    if (e.message instanceof Array) {
      e.message.forEach(msg => {
        err.push({ message: msg });
      });
    } else err.push({ message: e.message });
  });
  return err;
}
