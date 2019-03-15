const { gql } = require('apollo-server');
const geekBeerDefs = gql`
    type Event {
        id: ID!
        name: String
        description: String
        date: String
        venue: Venue
        talks: [Talk]
    }

    type Talk {
        id: ID!
        title: String
        description: String
        speaker: Speaker
    }
    
    type Speaker {
        id: ID!
        name: String
        company: String
        twitter: String
        image: Image
    }
    
    type Venue {
        id: ID!
        title: String
        organization: String
        city: String
        address: String
        address2: String
        postalCode: String
    }
    
    type Image {
        id: ID!
        url: String
        title: String
        description: String
        height: Int
        width: Int
        fileType: String
        fileSize: Int
    }
`;

module.exports = geekBeerDefs;
