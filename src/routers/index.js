import loginRouter from "./login.router.js";
import viewsRouter from "./views.router.js";

export default (app) => {
  app.use("/", viewsRouter);
  app.use("/", loginRouter)
};
