const {
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql');

const NodeInputType = new GraphQLInputObjectType({
  name: 'NodeInput',
  description: 'Input for node',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
});

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Payload for user',
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

const PointInputType = new GraphQLInputObjectType({
  name: 'PointInput',
  fields: {
    x: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    y: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
});

const LogInInputType = new GraphQLInputObjectType({
  name: 'LogInInput',
  description: 'Email and password for login',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = {
  UserInputType,
  PointInputType,
  NodeInputType,
  LogInInputType,
};
