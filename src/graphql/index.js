const { graphql, buildSchema } = require('graphql');
const {
  GraphQLSchema,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql');
const loaders = require('./loaders');
const { NodeInterface, UserType, UserInputType } = require('./types');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: {
    viewer: {
      type: NodeInterface,
      resolve(source, args, context) {
        return loaders.getNodeById(context);
      },
    },
    node: {
      type: NodeInterface,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(source, args, context, info) {
        return loaders.getNodeById(args.id);
      },
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        input: { type: UserInputType },
      },
      resolve(source, args, context) {
        return loaders.createUser(args.input);
      },
    },
  },
});

module.exports.Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
