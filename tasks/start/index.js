const { createConnection } = require("typeorm");

module.exports = async function start(settings) {
    this.connection = await createConnection(settings);
    if (this.switchToUserDatabase) {
        await this.switchToUserDatabase(settings);
    }
};
