import { Router } from "express";
import { sendLoginPage } from "../controllers/view.handler.js";

const viewsRouter = Router();
viewsRouter.get("/login", sendLoginPage)

export default viewsRouter
