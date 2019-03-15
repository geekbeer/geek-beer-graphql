module.exports = `
type Query {
    event(id: ID): Event
    events: [Event]
    talk(id: ID!): Talk
    talks: [Talk]
    speaker(id: ID): Speaker
}
`;
