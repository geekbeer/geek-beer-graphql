const {getEntry, getEntries} = require('./client');

const getTalk = async (entryId) => {
    try {
        return getEntry(entryId, {
            'content_type': 'presentation',
            include: 2
        });
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

const getTalks = async () => {
    try {
        const talks = await getEntries({
            'content_type': 'presentation',
            include: 4,
            limit: 100,
            skip: 0
        });

        return talks.items;
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

const getEvent = async (uri) => {
    console.log(uri);
    try {
        const event = await getEntries({
            'content_type': 'event',
            'fields.uri': uri,
            include: 4,
            limit: 1
        });

        return event.items[0];
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

const getEvents = async () => {
    try {
        const talks = await getEntries({
            'content_type': 'event',
            'order': '-fields.date',
            include: 4,
            limit: 100,
            skip: 0
        });

        return talks.items;
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

const getSpeaker = async (entryId) => {
    try {
        return getEntry(entryId, {
            'content_type': 'speaker',
            include: 2
        });
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

const getPage = async (uri) => {
    try {
        const page = await getEntries({
            'content_type': 'webPage',
            'fields.uri': uri,
            include: 2,
            limit: 1
        });

        return page.items[0];
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

module.exports = {
    getTalk,
    getTalks,
    getEvent,
    getEvents,
    getSpeaker,
    getPage
};
