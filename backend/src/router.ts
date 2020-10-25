import express, { Router } from "express";
import UserController from "./controllers/User";

const routes = Router();

routes.route("/users").get(UserController.index).post(UserController.store);
routes
  .route("/users/:id")
  .get(UserController.show)
  .put(UserController.update)
  .delete(UserController.destroy);

export default routes;
