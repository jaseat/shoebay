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
const { NodeInterface, UserType } = require('./types');
const { UserInputType, PointInputType } = require('./input-types');
const resolvers = require('./resolvers');

const CreateUserMutation = {
  createUser: {
    description: 'Create a new user',
    type: UserType,
    args: {
      input: { type: new GraphQLNonNull(UserInputType) },
    },
    resolve(source, args, context) {
      return resolvers.createUser(args.input);
    },
  },
};

module.exports = {
  ...CreateUserMutation,
};
