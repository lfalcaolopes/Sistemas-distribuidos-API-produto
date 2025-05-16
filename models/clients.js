const db = require("../config/database");

module.exports = {
    findAll: () => db("cliente"),
    findById: (id) => db("cliente").where("id", id).first(),
    create: (data) => db("cliente").insert(data),
    update: (id, data) => db("cliente").where("id", id).update(data),
    remove: (id) => db("cliente").where("id", id).delete()
};