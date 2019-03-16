module.exports = {
    ContentSection: {
        id: (data) => data.sys.id,
        title: (data) => data.fields.title,
        body: (data) => data.fields.body
    }
};
