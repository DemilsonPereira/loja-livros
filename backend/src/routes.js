import { Router } from "express";
import { LivroController } from "../controllers/LivroController.js";
import mysql from "mysql";


const router = Router();

const livroController = new LivroController();

router.get('/', (request, response) => {
    return response.json({ message: "Olá mundo!" });
});

router.get('/books', (request, response) => {
    return response.json({
        name: "Demilson",
        Idade: 36,
        Telefone: "92991121118"
    });
});

router.get("/livros", livroController.index);

router.post("/livros", livroController.create);

router.put("/livros/:id", livroController.update);

router.delete("/livros/:id", livroController.delete);

export {
    router
}


