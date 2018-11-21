CREATE DATABASE meu_blog;
use meu_blog;

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(50) NOT NULL,
  `descricao` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `titulo` varchar(200) NOT NULL,
  `texto` varchar(255) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `dt_criacao` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `post`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

INSERT INTO categoria (nome,descricao) VALUES
('Política','Comentários sobre as eleições 2018'),
('Esportes','Tudo sobre futebol e outros esportes'),
('Entretenimento','Notícias sobre o mundo do cinema'),
('Comédia','KKKJKJKJ trallei'),
('Infantil','Conteúdo para crianças'),
('Comida','Hmmm que fome'),
('Moda','Maria linda');

INSERT INTO post (titulo,texto,id_categoria,autor) VALUES
('Post1','Vou votar em branco',1,'Jorge'),
('Post2','Basquete é toooop',2,'Eu'),
('Post3','SW IX vai flopar',3,'Eu 2019'),
('Post4','KJKJKJKJ GRAZADO',4,'Didi'),
('Post5','Peppa Pig é top',5,'Maria'),
('Post6','Fazer um risoto',6,'Didek'),
('Post7','te amo',7,'Eu'),
('Post8','Cade meu pão',6,'Giovana'),
('Post9','Vou te comer',6,'Thairinck'),
('Post10','Comer uma pizza',6,'Nicolas');