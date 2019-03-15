module.exports = {
    Venue: {
        id: (data) => data.sys.id,
        title: (data) => data.fields.title,
        organization: (data) => data.fields.organization,
        city: (data) => data.fields.city,
        address: (data) => data.fields.address,
        address2: (data) => data.fields.address2,
        postalCode: (data) => data.fields.postalCode
    }
};
