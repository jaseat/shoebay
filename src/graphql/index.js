const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello(name: String = "Anonymous"): String
    test: String
  }
`);

const root = {
  hello: (obj, args) => {
    console.log(args);
    // return args.name;
    return `Hello ${obj.name}!`;
  },
  test: () => 'This is a test!',
};

module.exports.schema = schema;
module.exports.root = root;
