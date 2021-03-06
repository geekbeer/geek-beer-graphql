require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const geekBeerQuery = require('./typeDefs/Query');
const geekBeerTypeDefs = require('./typeDefs/GeekBeer');

// Resolvers
const query = require('./resolvers/GeekBeer/Query');
const talk = require('./resolvers/GeekBeer/Talk');
const event = require('./resolvers/GeekBeer/Event');
const speaker = require('./resolvers/GeekBeer/Speaker');
const venue = require('./resolvers/GeekBeer/Venue');
const image = require('./resolvers/GeekBeer/Image');
const contentSection = require('./resolvers/GeekBeer/ContentSection');
const page = require('./resolvers/GeekBeer/Page');
const pageContent = require('./resolvers/GeekBeer/PageContent');

const typeDefs = [
    geekBeerQuery,
    geekBeerTypeDefs
];

// A map of functions which return data for the schema.
const resolvers = {
    ...query,
    ...talk,
    ...event,
    ...speaker,
    ...venue,
    ...image,
    ...page,
    ...contentSection,
    ...pageContent
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
});

server.listen({port: process.env.PORT || 4000}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
