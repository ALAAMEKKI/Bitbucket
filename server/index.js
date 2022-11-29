const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");
const PORT = process.env.PORT || 8000;
const cors = require("cors");
require("./db/mongoose");


//Create Server
const app = express();
const server = http.createServer(app);


//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));


//Routers
const agentRouter = require("./routers/agent");



app.use(cors());
app.use("/api/v1", agentRouter);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));