import viewsRouter from "./views.router.js";

export default (app) => {
  app.use("/", viewsRouter);
};
