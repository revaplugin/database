module.exports = async function switchToUserDatabase(settings) {
    if (!this.connection) {
        throw new Error("Connect to the database first");
    }

    let repo = await this.connection.getRepository("Main");
    let main = await repo.findOne({});
    if (!main) {
        let database = settings;
        database = [database];
        let defaultMain = { database };
        await repo.save(defaultMain);
        main = await repo.findOne({});
    }

    let repoDatabase = await this.connection.getRepository("Database");
    main.database = await repoDatabase.save({
        "name":        "default",
        "type":        "sqlite",
        "database":    "./data/local.sqlite",
        "synchronize": true,
    });

    console.log({ main });
    main = await repo.save(main);

    console.log({ main });
    // if (type !== options.type || database !== options.database) {
    //     await this.connection.close();
    //     start({ type, database });
    // }
};
