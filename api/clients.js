const errors = require("restify-errors");
const clienteService = require("../services/clients");

module.exports = (server) => {
    server.get("/clients", async (req, res) => {
        try {
            const dados = await clienteService.getAll();
            res.send(dados);
        } catch (err) {
            res.send(new errors.InternalServerError(err.message));
        }
    });

    server.get("/clients/:clientId", async (req, res) => {
        try {
            const dados = await clienteService.getById(req.params.clientId);
            if (!dados) return res.send(new errors.NotFoundError("Cliente não encontrado"));
            res.send(dados);
        } catch (err) {
            res.send(new errors.InternalServerError(err.message));
        }
    });

    server.post("/clients", async (req, res) => {
        try {
            const dados = await clienteService.create(req.body);
            res.send(dados);
        } catch (err) {
            res.send(new errors.BadRequestError("Não foi possível inserir"));
        }
    });

    server.put("/clients/:clientId", async (req, res) => {
        try {
            const dados = await clienteService.update(req.params.clientId, req.body);
            if (!dados) return res.send(new errors.NotFoundError("Cliente não encontrado"));
            res.send({ success: true });
        } catch (err) {
            res.send(new errors.BadRequestError("Não foi possível editar"));
        }
    });

    server.del("/clients/:clientId", async (req, res) => {
        try {
            const dados = await clienteService.remove(req.params.clientId);
            if (!dados) return res.send(new errors.NotFoundError("Cliente não encontrado"));
            res.send({ success: true });
        } catch (err) {
            res.send(new errors.BadRequestError("Não foi possível excluir"));
        }
    });
};