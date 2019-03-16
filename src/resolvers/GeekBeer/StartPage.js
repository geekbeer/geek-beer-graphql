module.exports = {
    StartPage: {
        id: (data) => data.sys.id,
        pageTitle: (data) => data.fields.pageTitle,
        pageDescription: (data) => data.fields.pageDescription,
        content: (data) => data.fields.content
    }
};
