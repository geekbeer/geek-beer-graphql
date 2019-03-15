module.exports = {
    Speaker: {
        id: (data) => data.sys.id,
        name: (data) => data.fields.name,
        company: (data) => data.fields.company,
        twitter: (data) => data.fields.twitterHandle,
        image: (data) => data.fields.profileImage
    }
};
