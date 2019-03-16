module.exports = {
    PageContent: {
        __resolveType(obj, context, info) {
            const type = obj.sys.contentType.sys.id;
            if(type === 'contentSection') return 'ContentSection';
            if(type === 'event') return 'Event';
            if(type === 'speaker') return 'Speaker';
            if(type === 'presentation') return 'Talk';
            if(type === 'venue') return 'Venue';

            return null;
        }
    }
};
