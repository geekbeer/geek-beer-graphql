const contentful = require('contentful');

const contentfulClient = (preview) => {
    const host = preview ? 'preview.contentful.com' : 'cdn.contentful.com';
    const token = preview ? process.env.CONTENTFUL_PREVIEWTOKEN : process.env.CONTENTFUL_TOKEN;
    return contentful.createClient({
        host: host,
        space: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
        accessToken: token
    });
};

const getEntry = async (entryId, query) => {
    try {
        const client = contentfulClient(false);
        return client.getEntry(entryId, query);
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

const getEntries = async (query) => {
    try {
        const client = contentfulClient(false);
        return await client.getEntries(query);
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

module.exports = {
    getEntry,
    getEntries
};
