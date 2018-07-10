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
    username: {
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

const ArticleInputType = new GraphQLInputObjectType({
  name: 'ArticleInput',
  description: 'Payload for article.',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

const CommentInputType = new GraphQLInputObjectType({
  name: 'CommentInput',
  description: 'Payload for comment.',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
    articleId: {
      type: new GraphQLNonNull(GraphQLID),
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
  ArticleInputType,
  CommentInputType,
  PointInputType,
  NodeInputType,
  LogInInputType,
};
