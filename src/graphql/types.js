const {
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const db = require('../db');

module.exports.NodeInterface = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolveType: source => {
    if (source.__tableName === db.User.getTableName()) {
      return UserType;
    }
  },
});

const resolveId = source => {};

module.exports.UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: resolveId,
    },
  },
});
