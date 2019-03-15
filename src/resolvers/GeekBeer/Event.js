module.exports = {
    Event: {
        id: (data) => data.sys.id,
        name: (data) => data.fields.title,
        description: (data) => data.fields.description,
        date: (data) => data.fields.date,
        venue: (data) => data.fields.venue,
        talks: (data) => data.fields.presentations
    }
};
