CREATE DATABASE IF NOT EXISTS vidaadulta_db;

USE vidaadulta_db;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY, -- ID único para cada usuário
    nome VARCHAR(100) NOT NULL,        -- Nome do usuário
    email VARCHAR(100) NOT NULL UNIQUE, -- Email do usuário, deve ser único
    senha VARCHAR(255) NOT NULL,        -- Senha do usuário (armazenada de forma segura)
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Data de criação do registro
);
