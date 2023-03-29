import { Router } from "express";
import { LivroController } from "../controllers/LivroController.js";


const router = Router();

const livroController = new LivroController();


router.get("/livros", livroController.index);

router.post("/livros", livroController.create);

router.put("/livros/:id", livroController.update);

router.delete("/livros/:id", livroController.delete);

export {
    router
}


