const {
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql');
const db = require('../db');
const resolvers = require('./resolvers');

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
      case db.Article.getName():
        return ArticleType;
      case db.Comment.getName():
        return CommentType;
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
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        resolve: resolveId,
      },
      username: {
        type: new GraphQLNonNull(GraphQLString),
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: resolveProtected,
      },
      privilege: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: resolveProtected,
      },
      paymentMethod: {
        type: GraphQLString,
        resolve: resolveProtected,
      },
      footShape: {
        type: GraphQLString,
        resolve: resolveProtected,
      },
      articles: {
        type: ArticleConnectionType,
        args: {
          after: {
            type: GraphQLString,
          },
          first: {
            type: GraphQLInt,
          },
        },
        resolve(source, args, context) {
          return resolvers.getUserArticles(source, args, context);
        },
      },
    };
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

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  interfaces: [NodeInterface],
  description: 'Articles for the blog.',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'Article ID.',
        resolve: resolveId,
      },
      title: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Article title.',
      },
      text: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Article text.',
      },
      author: {
        type: new GraphQLNonNull(UserType),
        description: 'Article author.',
        resolve: (source, args, context) => {
          return context.loaders.user.load(source.UserId);
        },
      },
      comments: {
        args: {
          first: { type: GraphQLInt },
          after: { type: GraphQLString },
        },
        type: new GraphQLNonNull(CommentConnectionType),
        description: 'Article comments.',
        resolve: (source, args, context) => {
          return resolvers.getArticleComments(source, args, context);
        },
      },
      shortText: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Article text shortened to a max word count.',
        resolve: source => {
          let shortText = '';
          if (source.text.length > 255) {
            shortText = source.text.slice(0, 252) + '...';
          } else shortText = source.text;
          return shortText;
        },
      },
      createdAt: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Article creation date.',
      },
      updatedAt: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Article last edit date.',
      },
    };
  },
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  interfaces: [NodeInterface],
  description: 'Comment for an article.',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Comment ID.',
      resolve: resolveId,
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Comment title.',
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Comment text.',
    },
    author: {
      type: new GraphQLNonNull(UserType),
      description: 'Comment author.',
      resolve: (source, args, context) => {
        return context.loaders.user.load(source.UserId);
      },
    },
    article: {
      type: new GraphQLNonNull(ArticleType),
      description: 'Article comment is attatched to.',
      resolve: (source, args, context) => {
        return context.loaders.article.load(source.ArticleId);
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Comment creation date.',
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Comment last edit date.',
    },
  },
});

// const SearchInterface = new GraphQLInterfaceType({
//   name: 'SearchInterface',
//   fields: {

//   }
// })

const PageInfoType = new GraphQLObjectType({
  name: 'PageInfo',
  fields: {
    hasNextPage: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    hasPreviousPage: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    startCuroser: {
      type: GraphQLString,
    },
    endCursor: {
      type: GraphQLString,
    },
  },
});

const ArticleEdgeType = new GraphQLObjectType({
  name: 'AricleEdge',
  fields: () => {
    return {
      cursor: {
        type: new GraphQLNonNull(GraphQLString),
      },
      node: {
        type: new GraphQLNonNull(ArticleType),
      },
    };
  },
});

const CommentEdgeType = new GraphQLObjectType({
  name: 'CommentEdge',
  fields: () => {
    return {
      cursor: {
        type: new GraphQLNonNull(GraphQLString),
      },
      node: {
        type: new GraphQLNonNull(CommentType),
      },
    };
  },
});

const ArticleConnectionType = new GraphQLObjectType({
  name: 'ArticleConnection',
  fields: {
    pageInfo: {
      type: new GraphQLNonNull(PageInfoType),
    },
    edges: {
      type: new GraphQLList(ArticleEdgeType),
    },
  },
});

const CommentConnectionType = new GraphQLObjectType({
  name: 'CommentConnection',
  fields: {
    pageInfo: {
      type: new GraphQLNonNull(PageInfoType),
    },
    edges: {
      type: new GraphQLList(CommentEdgeType),
    },
  },
});

const SearchType = new GraphQLObjectType({
  name: 'Search',
  description: 'Search for things',
  fields: {
    // byShape: {
    //   args: {
    //     input: { type: new GraphQLNonNull(ShapeSearchInputType) },
    //   },
    //   type: new GraphQLNonNull(ProductType),
    // },
    // byImage: {
    //   args: {
    //     input: { type: new GraphQLNonNull(ImageSearchInputType) },
    //   },
    //   type: new GraphQLNonNull(ProductType),
    // },
    // byText: {
    //   args: {
    //     input: { type: new GraphQLNonNull(TextSearcgInputType) },
    //   },
    //   type: new GraphQLNonNull(ProductType),
    // },
    recentArticles: {
      type: ArticleConnectionType,
      args: {
        after: {
          type: GraphQLString,
        },
        first: {
          type: GraphQLInt,
        },
      },
      resolve(source, args, context) {
        return resolvers.getRecentArticles(source, args, context);
      },
    },
  },
});

module.exports = {
  NodeInterface,
  UserType,
  ProductType,
  ArticleType,
  ArticleConnectionType,
  CommentType,
  SearchType,
};
