const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql');

const restaurants = require('./restautants-field');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world'
    },
    answer: {
      type: GraphQLInt,
      resolve: () => 42
    },
    restaurants
  }
});

const schema = new GraphQLSchema({
  query: QueryType
});

module.exports = schema;
