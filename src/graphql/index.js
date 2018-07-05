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
        return loaders.getNodeById(context.user);
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
    logIn: {
      description: 'Log in user',
      type: GraphQLString,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(source, args, context) {
        return loaders.logIn(args.email, args.password, context.req);
      },
    },
    logOut: {
      description: 'Log out user',
      type: GraphQLString,
      resolve(source, args, context) {
        context.req.logout();
        return 'Logged out';
      },
    },
    createUser: {
      description: 'Create a new user',
      type: UserType,
      args: {
        input: { type: new GraphQLNonNull(UserInputType) },
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
