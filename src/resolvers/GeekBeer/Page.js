module.exports = {
    Page: {
        id: (data) => data.sys.id,
        uri: (data) => data.fields.uri,
        pageTitle: (data) => data.fields.pageTitle,
        pageDescription: (data) => data.fields.pageDescription,
        content: (data) => data.fields.content,
        position: (data) => data.fields.position
    }
};
