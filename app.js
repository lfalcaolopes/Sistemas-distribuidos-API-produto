const restify = require("restify");
const errors = require("restify-errors");
const produtoRoutes = require("./api/products");
const clienteRoutes = require("./api/clients");

const server = restify.createServer({
  name: "Lojinha",
  version: "1.0.0"
});

server.use( restify.plugins.acceptParser( server.acceptable ) )
server.use( restify.plugins.queryParser() )
server.use( restify.plugins.bodyParser() )

produtoRoutes(server);
clienteRoutes(server);

server.get("/", (req, res, next) => {
    res.send({ resposta: "Sejam bem-vindos à nossa Lojinha" });
    next();
});

server.listen(8001, () => {
    console.log("%s executando em: %s", server.name, server.url);
});