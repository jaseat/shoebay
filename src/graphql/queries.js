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
const {
  NodeInterface,
  UserType,
  UserInputType,
  ShapeSearchInputType,
  PointInputType,
} = require('./types');
const loaders = require('./loaders');

module.exports.ViewQuery = {
  viewer: {
    type: NodeInterface,
    resolve(source, args, context) {
      return loaders.getNodeById(context.user);
    },
  },
};

module.exports.NodeQuery = {
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
};

module.exports.ShapeSearchQuery = {
  shapeSearch: {
    type: GraphQLString,
    args: {
      points: {
        type: new GraphQLList(PointInputType),
      },
    },
    resolve(source, args, context, info) {
      console.log('Args.points:', args.points);
      return 'test';
    },
  },
};
