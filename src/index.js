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
    ...image
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
