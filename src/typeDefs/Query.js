module.exports = `
type Query {
    event(uri: String): Event
    events: [Event]
    talk(id: ID!): Talk
    talks: [Talk]
    speaker(id: ID): Speaker
    page(uri: String!): Page
    pages(pageType: String!): [Page]
}
`;
