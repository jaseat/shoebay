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

module.exports = {
  UserInputType,
  PointInputType,
};
