import express from "express";
import * as dotenv from "dotenv";
import cors from "cors"
dotenv.config();

import { router } from "./routes.js";

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.router();

        this.port = process.env.PORT || 3000;
        this.uri = "http://localhost"
    }

    middlewares() {
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
        this.server.use(cors())
    }

    router() {
        this.server.use(router);
    }

    start() {
        this.server.listen(this.port, () => {
            console.log(`Server is listening ${this.uri}:${this.port}`);
        })
    }
}

export {
    App
} 