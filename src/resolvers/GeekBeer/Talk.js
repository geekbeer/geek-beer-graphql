module.exports = {
    Talk: {
        id: (data) => data.sys.id,
        title: (data) => data.fields.title,
        description: (data) => data.fields.description,
        speaker: (data) => data.fields.speaker
    }
};
