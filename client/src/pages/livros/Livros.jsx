import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Livros = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const buscarTodosLivros = async () => {
            try {
                const listarLivros = await axios.get("http://localhost:3333/livros");
                setLivros(listarLivros.data)
            } catch (err) {
                console.log(err);
            }
        }
        buscarTodosLivros()
    }, []);

    const manipularDeletar = async (id) => {
        try {
            await axios.delete("http://localhost:3333/livros/" + id);
            window.location.reload();
        } catch (error) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1 className='menuTitulo'>Loja de Livros AM</h1>
            <div className='livros'>
                {livros.map(livro => (
                    <div className='livro' key={livro.id}>
                        {livro.foto && < img src={livro.foto} alt='' />}
                        <h2>{livro.titulo}</h2>
                        <p>{livro.descricao}</p>
                        <span>R$ {livro.preco}</span>
                        <button className='deletar' onClick={() => manipularDeletar(livro.id)}>Deletar</button>
                        <button className='editar'><Link to={`/editar/${livro.id}`}>Editar</Link></button>
                    </div>
                ))}
            </div>
            <button className='btnCadastro'>
                <Link to={"/adicionar"}>Adicionar novo livro</Link>
            </button>
        </div>
    )
}

export default Livros
