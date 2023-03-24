import { databaseConnect as db } from "../database/databaseConnect.js";


class LivroService {

    async index() {
        const listarLivros = await new Promise((resolve, reject) => {
            db.query("select * from livros", (err, data) => {
                if (err) reject(err);
                else resolve(data);
            })
        });

        return listarLivros;
    }

}

export {
    LivroService
}