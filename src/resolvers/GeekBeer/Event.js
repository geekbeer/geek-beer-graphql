module.exports = {
    Event: {
        id: (data) => data.sys.id,
        title: (data) => data.fields.title,
        uri: (data) => data.fields.uri,
        excerpt: (data) => data.fields.excerpt,
        description: (data) => data.fields.description,
        date: (data) => data.fields.date,
        venue: (data) => data.fields.venue,
        talks: (data) => data.fields.presentations
    }
};
