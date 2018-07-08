const {
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
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

const resolveProtected = (source, args, context, { fieldName }) => {
  if (context.user && context.user.id === source.id) return source[fieldName];
  else return 'Unauthorized';
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
      resolve: resolveProtected,
    },
    paymentMethod: {
      type: GraphQLString,
      resolve: resolveProtected,
    },
    footImg: {
      type: GraphQLString,
      resolve: resolveProtected,
    },
  },
});

const ProductType = new GraphQLObjectType({
  name: 'Product',
  interfaces: [NodeInterface],
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: resolveId,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    departhment: {
      type: new GraphQLNonNull(GraphQLString),
    },
    category: {
      type: new GraphQLNonNull(GraphQLString),
    },
    size: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    width: {
      type: new GraphQLNonNull(GraphQLString),
    },
    color: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    similarity: {
      type: GraphQLFloat,
    },
  },
});

// const SearchInterface = new GraphQLInterfaceType({
//   name: 'SearchInterface',
//   fields: {

//   }
// })

const SearchType = new GraphQLObjectType({
  name: 'Search',
  description: 'Search for products',
  fields: {
    byShape: {
      args: {
        input: { type: new GraphQLNonNull(ShapeSearchInputType) },
      },
      type: new GraphQLNonNull(ProductType),
    },
    byImage: {
      args: {
        input: { type: new GraphQLNonNull(ImageSearchInputType) },
      },
      type: new GraphQLNonNull(ProductType),
    },
    byText: {
      args: {
        input: { type: new GraphQLNonNull(TextSearcgInputType) },
      },
      type: new GraphQLNonNull(ProductType),
    },
  },
});

module.exports = {
  NodeInterface,
  UserType,
  ProductType,
};
