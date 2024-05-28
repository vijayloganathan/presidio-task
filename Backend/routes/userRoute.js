import express from "express";
import { fetch, create, login } from "../controller/userController.js";

const route = express.Router();

route.get("/fetch", fetch);
route.post("/create", create);
route.post("/login", login);

export default route;
