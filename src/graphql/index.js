const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const queries = require('./queries');
const mutations = require('./mutations');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: {
    ...queries,
  },
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: {
    ...mutations,
  },
});

module.exports.Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
