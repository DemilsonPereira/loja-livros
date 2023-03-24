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



// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "livraria"
// })

// router.get("/livros", (request, response) => {
//     const listarLivros = "select * from livros";
//     db.query(listarLivros, (err, data) => {
//         if (err) {
//             return response.json(err)
//         }
//         return response.json(data)
//     })

// })

export {
    router
}


