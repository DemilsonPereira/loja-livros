import { LivroService } from "../services/LivroService.js";


class LivroController {

    async index(request, response) {
        const livroService = new LivroService();
        const livros = await livroService.index();
        return response.json(livros);
    }

}

export {
    LivroController
}