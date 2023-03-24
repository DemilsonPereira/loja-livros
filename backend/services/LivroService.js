import { databaseConnect as db } from "../database/databaseConnect.js";

class LivroService {

    index = (request, response) => {
        const listarLivros = "select * from livros";
        db.query(listarLivros, (err, data) => {
            if (err) {
                return response.json(err)
            }
            return response.json(data)
        })
    }
}

export {
    LivroService
}