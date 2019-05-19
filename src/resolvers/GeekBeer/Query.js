const ctl = require('../../api/contentful/queries');

module.exports = {
    Query: {
        talk: async (_, { id }) => {
            return ctl.getTalk(id);
        },
        talks: async (_) => {
            return ctl.getTalks();
        },
        event: async (_, { id }) => {
            return ctl.getEvent(id);
        },
        events: async (_) => {
            return ctl.getEvents();
        },
        speaker: async (_, { id }) => {
            return ctl.getSpeaker(id);
        },
        startPage: async (_) => {
            return ctl.getStartPage();
        },
        page: async (_, { uri }) => {
            return ctl.getPage(uri);
        }
    }
};
