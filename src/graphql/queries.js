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
const { NodeInterface, UserType, ProductType } = require('./types');
const { PointInputType } = require('./input-types');
const resolvers = require('./resolvers');

const ViewQuery = {
  viewer: {
    type: UserType,
    resolve(source, args, context) {
      if (context.user)
        return resolvers.getNodeById(
          `user:${context.user.id}`,
          context.loaders,
          context.db
        );
      else return new Error('Please log in.');
    },
  },
};

const NodeQuery = {
  node: {
    type: NodeInterface,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve(source, args, context, info) {
      return resolvers.getNodeById(args.id, context.loaders, context.db);
    },
  },
};

const ShapeSearchQuery = {
  shapeSearch: {
    type: new GraphQLList(ProductType),
    args: {
      points: {
        type: new GraphQLList(PointInputType),
      },
    },
    resolve(source, args, context, info) {
      return resolvers.shapeSearch(args.points);
    },
  },
};

const LogInQuery = {
  logIn: {
    description: 'Log in user',
    type: GraphQLString,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, args, context) {
      return resolvers.logIn(args.email, args.password, context.req);
    },
  },
};

const LogOutQuery = {
  logOut: {
    description: 'Log out user',
    type: GraphQLString,
    resolve(source, args, context) {
      context.req.logout();
      return 'Logged out';
    },
  },
};

module.exports = {
  ...ViewQuery,
  ...NodeQuery,
  ...ShapeSearchQuery,
  ...LogInQuery,
  ...LogOutQuery,
};
