const {
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql');
const db = require('../db');

const NodeInterface = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolveType: source => {
    switch (source.__tableName) {
      case db.User.getName():
        return UserType;
      default:
        throw new Error('Undefined node type');
    }
  },
});

const resolveId = source => {
  return db.dbIdToNodeId(source.id, source.__tableName);
};

const UserType = new GraphQLObjectType({
  name: 'User',
  interfaces: [NodeInterface],
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: resolveId,
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    paymentMethod: {
      type: GraphQLString,
    },
    footImg: {
      type: GraphQLString,
    },
  },
});

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    paymentMethod: {
      type: GraphQLString,
    },
    footImg: {
      type: GraphQLString,
    },
  },
});

module.exports = {
  NodeInterface,
  UserType,
  UserInputType,
};
