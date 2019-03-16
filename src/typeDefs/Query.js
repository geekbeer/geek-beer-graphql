module.exports = `
type Query {
    event(id: ID, uri: String): Event
    events: [Event]
    talk(id: ID!): Talk
    talks: [Talk]
    speaker(id: ID): Speaker
    startPage: StartPage
}
`;
