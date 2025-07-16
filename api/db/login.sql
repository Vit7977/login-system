DROP DATABASE login_system;
CREATE DATABASE login_system;
USE login_system;

CREATE TABLE usuario(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(200),
    senha VARCHAR(60),
    data_nasc DATE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);