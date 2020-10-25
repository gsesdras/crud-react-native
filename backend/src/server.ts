import express from "express";
import routes from "./router";
import bodyParser from "body-parser";
import "./database/connection";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(3333);
