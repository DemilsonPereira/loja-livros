import { LivroService } from "../services/LivroService.js";


class LivroController {

    async index(request, response) {
        const livroService = new LivroService();
        const listarLivros = await livroService.index();
        return response.json(listarLivros);
    }

    async create(request, response) {
        const { titulo, descricao, foto, preco } = request.body;
        const livroService = new LivroService();
        const adicionarLivros = await livroService.create({ titulo, descricao, foto, preco });
        return response.json(adicionarLivros);
    }

    async update(request, response) {
        const { id } = request.params;
        const { titulo, descricao, foto, preco } = request.body;
        const livroService = new LivroService();
        const deletarLivro = await livroService.update({ id, titulo, descricao, foto, preco });
        return response.json(deletarLivro);
    }

    async delete(request, response) {
        const { id } = request.params;
        const livroService = new LivroService();
        const deletarLivro = await livroService.delete({ id });
        return response.json(deletarLivro);
    }

}

export {
    LivroController
}