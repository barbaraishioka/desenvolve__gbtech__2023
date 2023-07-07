const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;

// APAGADO E REESCRITO NO ROUTES
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.get("/teste", (req, res) =>
//   res.status(200).send({ mensagem: "Boas-vindas à API" }),
// );
