const ctl = require('../../api/contentful/queries');

module.exports = {
    Query: {
        talk: async (_, { id }) => {
            return ctl.getTalk(id);
        },
        talks: async (_) => {
            return ctl.getTalks();
        },
        event: async (_, { uri }) => {
            return ctl.getEvent(uri);
        },
        events: async (_) => {
            return ctl.getEvents();
        },
        speaker: async (_, { id }) => {
            return ctl.getSpeaker(id);
        },
        page: async (_, { uri }) => {
            return ctl.getPage(uri);
        }
    }
};
