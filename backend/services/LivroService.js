import { databaseConnect as db } from "../database/databaseConnect.js";


class LivroService {

    async index() {
        const listarLivros = await new Promise((resolve, reject) => {
            const listarLivros = "select * from livros";
            db.query(listarLivros, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });

        return listarLivros;
    }

    async create({ titulo, descricao, foto, preco }) {
        const adicionarLivro = await new Promise((resolve, reject) => {
            const adicionarLivro = "insert into livros (`titulo`, `descricao`, `foto`, `preco`) VALUES (?)";
            const valores = [
                titulo,
                descricao,
                foto,
                preco
            ];
            db.query(adicionarLivro, [valores], (err, data) => {
                if (err) reject(err);
                else resolve("Livro adicionado com sucesso!");
            });
        });

        return adicionarLivro;
    }

    async update({ id, titulo, descricao, foto, preco }) {
        const editarLivro = await new Promise((resolve, reject) => {
            const livroId = id;
            const editarLivro = "update livros set `titulo` = ?, `descricao` = ?, `foto` = ?, `preco` = ? where id = ?";
            const valores = [
                titulo,
                descricao,
                foto,
                preco,
            ];
            db.query(editarLivro, [...valores, livroId], (err, data) => {
                if (data.affectedRows === 0) {
                    resolve("Esté livro não está mais disponível.");
                }
                if (err) reject(err)
                else resolve("Livro editado com sucesso!");
            });
        });

        return editarLivro;
    }

    async delete({ id }) {
        const deletarLivro = await new Promise((resolve, reject) => {
            const livroId = id;
            const deletarLivro = "delete from livros where id = ?";
            db.query(deletarLivro, [livroId], (err, data) => {
                if (data.affectedRows === 0) {
                    resolve("Esté livro não está mais disponível.");
                }
                if (err) reject(err)
                else resolve("Livro deletado com sucesso!");
            });
        });

        return deletarLivro;
    }

}

export {
    LivroService
}