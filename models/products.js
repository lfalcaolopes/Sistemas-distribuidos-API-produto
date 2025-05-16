const db = require("../config/database");

module.exports = {
    findAll: () => db("produto"),
    findById: (id) => db("produto").where("id", id).first(),
    create: (data) => db("produto").insert(data),
    update: (id, data) => db("produto").where("id", id).update(data),
    remove: (id) => db("produto").where("id", id).delete()
};