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

const getEvent = async (entryId) => {
    try {
        return getEntry(entryId, {
            'content_type': 'event',
            include: 2
        });
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

module.exports = {
    getTalk,
    getTalks,
    getEvent,
    getEvents,
    getSpeaker
};
