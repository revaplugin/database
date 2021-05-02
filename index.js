const RevaPlugin = require("@revaplugin/revaplugin");
const { createConnection } = require("typeorm");

module.exports = class Database extends RevaPlugin {

    constructor() {
        super();
        this.connection = null;
        // this.loadTasks();
    }

    async start() {
        let options = {
            "type":     "sqlite",
            "database": "./data/local.sqlite",
            "logging":  true,
        };

        this.connection = await createConnection(options);
        // let repo = connection.getRepository();

        // switch to user configure database engine
    }

    getInstanceSettings(name) {
        if (!this.connection) {
            throw new Error("Connect to the database first");
        }

        // retrieve plugin settings from db

        return { name };
    }

};
