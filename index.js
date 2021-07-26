const RevaPlugin = require("@revaplugin/revaplugin");

module.exports = class Database extends RevaPlugin {

    // Plugin properties
    static _directory = module.path;

    static _name = "database";

    static _label = "Database";

    static _singleInstance = true;

    constructor(params) {
        super(params);
        this.connection = null;
    }

};
