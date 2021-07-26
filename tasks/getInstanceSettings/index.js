module.exports = async function getInstanceSettings(id) {
    if (!this.connection) {
        throw new Error("Connect to the database first");
    }

    let repo = await this.connection.getRepository("Instance");
    let instanceSettings = await repo.findOne(id);
    if (!instanceSettings) {
        throw new Error("Instance settings not found");
    }
    // retrieve plugin settings from db

    return instanceSettings;
};
