const { gql } = require('apollo-server');
const geekBeerDefs = gql`
    type Event {
        id: ID!
        title: String
        uri: String
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
    
    type StartPage {
        id: ID!
        pageTitle: String
        pageDescription: String
        content: [PageContent]
    }
    
    type Page {
        id: ID!
        uri: String
        pageTitle: String
        pageDescription: String
        content: [PageContent]
    }
    
    type ContentSection {
        id: ID!
        title: String
        body: String
    }
    
    union PageContent = ContentSection | Event | Talk | Speaker | Venue | Image
`;

module.exports = geekBeerDefs;
