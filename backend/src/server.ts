import express from "express";
import routes from "./router";
import bodyParser from "body-parser";
import http from "http";
import "./database/connection";
require("dotenv").config();

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

server.listen(process.env.PORT || 3333);
