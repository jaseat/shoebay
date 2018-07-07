const {
  GraphQLSchema,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql');
const Types = require('./types');
const InputTypes = require('./input-types');
const resolvers = require('./resolvers');

const ViewQuery = {
  viewer: {
    type: Types.UserType,
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
    type: Types.NodeInterface,
    args: {
      input: {
        type: new GraphQLNonNull(InputTypes.NodeInputType),
      },
    },
    resolve(source, args, context, info) {
      return resolvers.getNodeById(args.input.id, context.loaders, context.db);
    },
  },
};

const ShapeSearchQuery = {
  shapeSearch: {
    type: new GraphQLList(Types.ProductType),
    args: {
      points: {
        type: new GraphQLList(InputTypes.PointInputType),
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
      input: {
        type: new GraphQLNonNull(InputTypes.LogInInputType),
      },
    },
    resolve(source, args, context) {
      return resolvers.logIn(
        args.input.email,
        args.input.password,
        context.req
      );
    },
  },
};

const LogOutQuery = {
  logOut: {
    description: 'Log out user',
    type: GraphQLString,
    resolve(source, args, context) {
      context.req.logout();
      return null;
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
