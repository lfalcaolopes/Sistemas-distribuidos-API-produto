const errors = require("restify-errors");
const produtoService = require("../services/products");

module.exports = (server) => {
    server.get("/products", async (req, res) => {
        try {
            const dados = await produtoService.getAll();
            res.send(dados);
        } catch (err) {
            res.send(new errors.InternalServerError(err.message));
        }
    });

    server.get("/products/:productId", async (req, res) => {
        try {
            const dados = await produtoService.getById(req.params.productId);
            if (!dados) return res.send(new errors.NotFoundError("Produto não encontrado"));
            res.send(dados);
        } catch (err) {
            res.send(new errors.InternalServerError(err.message));
        }
    });

    server.post("/products", async (req, res) => {
        try {
            const dados = await produtoService.create(req.body);
            res.send(dados);
        } catch (err) {
            res.send(new errors.BadRequestError("Não foi possível inserir"));
        }
    });

    server.put("/products/:productId", async (req, res) => {
        try {
            const dados = await produtoService.update(req.params.productId, req.body);
            if (!dados) return res.send(new errors.NotFoundError("Produto não encontrado"));
            res.send({ success: true });
        } catch (err) {
            res.send(new errors.BadRequestError("Não foi possível editar"));
        }
    });

    server.del("/products/:productId", async (req, res) => {
        try {
            const dados = await produtoService.remove(req.params.productId);
            if (!dados) return res.send(new errors.NotFoundError("Produto não encontrado"));
            res.send({ success: true });
        } catch (err) {
            res.send(new errors.BadRequestError("Não foi possível excluir"));
        }
    });
};