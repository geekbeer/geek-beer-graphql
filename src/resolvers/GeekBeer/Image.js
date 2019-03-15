module.exports = {
    Image: {
        id: (data) => data.sys.id,
        url: (data) => data.fields.file.url,
        title: (data) => data.fields.title,
        description: (data) => data.fields.description,
        height: (data) => data.fields.file.details.image.height,
        width: (data) => data.fields.file.details.image.width,
        fileType: (data) => data.fields.file.contentType,
        fileSize: (data) => data.fields.file.details.size
    }
};
