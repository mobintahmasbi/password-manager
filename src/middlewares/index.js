import express from "express"
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default (app) => {
    app.use(express.static(path.join(__dirname, "../../public")))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
}