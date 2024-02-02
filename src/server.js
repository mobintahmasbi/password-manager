import express from "express";
import initialRouter from "./routers/index.js"
import initialMiddleWares from "./middlewares/index.js"
import connectionToMongodb from "./boot/mongo.js"

connectionToMongodb()
const app = express()
initialMiddleWares(app)
initialRouter(app)


app.listen(3000 ,() => {
    console.log('app is running on port 3000');
})