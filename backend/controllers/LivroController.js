import { LivroService } from "../services/LivroService.js";

class LivroController {

    livroService = new LivroService();

    index = (request, response) => {
        response.send(this.livroService.index());
    }
}

export {
    LivroController
}