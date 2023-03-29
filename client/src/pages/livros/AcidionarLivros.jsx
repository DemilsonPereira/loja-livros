import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AdicionarLivros = () => {
    const [livro, setLivro] = useState({
        titulo: "",
        descricao: "",
        preco: null,
        foto: "",
    });

    const redirecionamentoUrl = useNavigate();

    const manipuladorDeMudanças = (e) => {
        setLivro((visualizacao) => ({ ...visualizacao, [e.target.name]: e.target.value }));
    }

    const manipularClique = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3333/livros", livro);
            redirecionamentoUrl("/")
        } catch (err) {
            console.log(err);
        }
    }

    console.log(livro);

    return (
        <div className='form'>
            <h1>Adicionar novo livro</h1>
            <input type="text" placeholder='Título' onChange={manipuladorDeMudanças} name="titulo" />
            <input type="text" placeholder='Descrição' onChange={manipuladorDeMudanças} name="descricao" />
            <input type="number" placeholder='Preço' onChange={manipuladorDeMudanças} name="preco" />
            <input type="text" placeholder='Foto' onChange={manipuladorDeMudanças} name="foto" />
            <button className='btnForm' onClick={manipularClique}>Adicionar</button>
            <button className='btnForm'><Link to="/">Voltar</Link></button>
        </div>
    )
}

export default AdicionarLivros
