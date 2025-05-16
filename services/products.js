const Produto = require("../models/products");

module.exports = {
    getAll: () => Produto.findAll(),
    getById: (id) => Produto.findById(id),
    create: (data) => Produto.create(data),
    update: (id, data) => Produto.update(id, data),
    remove: (id) => Produto.remove(id)
};