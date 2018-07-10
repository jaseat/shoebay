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
const { NodeInterface, UserType, ArticleType } = require('./types');
const {
  UserInputType,
  PointInputType,
  ArticleInputType,
} = require('./input-types');
const resolvers = require('./resolvers');

const CreateUserMutation = {
  createUser: {
    description: 'Create a new user',
    type: UserType,
    args: {
      input: { type: new GraphQLNonNull(UserInputType) },
    },
    resolve(source, args, context) {
      return resolvers.createUser(context.db, args.input, context.req);
    },
  },
};

const CreateArticleMutation = {
  createArticle: {
    description: 'Create a new article.',
    type: ArticleType,
    args: {
      input: { type: new GraphQLNonNull(ArticleInputType) },
    },
    resolve(source, args, context) {
      return resolvers.createArticle(context.db, args.input, context.user);
    },
  },
};

module.exports = {
  ...CreateUserMutation,
  ...CreateArticleMutation,
};
