import axios from 'axios';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const EditarLivros = () => {
    const [livro, setLivro] = useState({
        titulo: "",
        descricao: "",
        preco: null,
        foto: "",
    });

    const redirecionamentoUrl = useNavigate();
    const localizarId = useLocation()

    const livroId = localizarId.pathname.split("/")[2]

    const manipuladorDeMudanças = (e) => {
        setLivro((visualizacao) => ({ ...visualizacao, [e.target.name]: e.target.value }));
    }

    const manipularClique = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:3333/livros/" + livroId, livro);
            redirecionamentoUrl("/")
        } catch (err) {
            console.log(err);
        }
    }

    console.log(livro);

    return (
        <div className='form'>
            <h1>Editar livro</h1>
            <input type="text" placeholder='Título' onChange={manipuladorDeMudanças} name="titulo" />
            <input type="text" placeholder='Descrição' onChange={manipuladorDeMudanças} name="descricao" />
            <input type="number" placeholder='Preço' onChange={manipuladorDeMudanças} name="preco" />
            <input type="text" placeholder='Foto' onChange={manipuladorDeMudanças} name="foto" />
            <button className='btnForm' onClick={manipularClique}>Atualizar</button>
            <button className='btnForm'><Link to="/">Voltar</Link></button>
        </div>
    )
}

export default EditarLivros
