create database if not exists livraria
default character set utf8mb4
default collate utf8mb4_general_ci;

use livraria;

create table if not exists livros(
	id int not null auto_increment,
    titulo varchar(45) not null,
    descricao varchar(255) not null,
    foto varchar(50) null,
    preco int not null,
    primary key(id)
)default charset = utf8mb4;

insert into livros(titulo, descricao, foto)
values
('Algoritimo e Logíca de programação', 'Livro de usando a linguagem Javascript', 'javascript.png');

select * from livros;

desc livros;
