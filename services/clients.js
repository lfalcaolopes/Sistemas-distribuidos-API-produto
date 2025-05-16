const Cliente = require("../models/clients");

module.exports = {
    getAll: () => Cliente.findAll(),
    getById: (id) => Cliente.findById(id),
    create: (data) => Cliente.create(data),
    update: (id, data) => Cliente.update(id, data),
    remove: (id) => Cliente.remove(id)
};