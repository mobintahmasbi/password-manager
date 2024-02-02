import mongoose from "mongoose";

export default () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("connect to mongodb successfully");
    }).catch((err) => {
        console.log("connection to mongodb failed");
        console.log(err);
    })
}