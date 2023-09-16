CREATE TABLE
    IF NOT EXISTS PESSOAS (
        id SERIAL PRIMARY KEY,
        apelido VARCHAR(255) NOT NULL UNIQUE,
        nome VARCHAR(255) NOT NULL,
        nascimento DATE NOT NULL,
        stack JSON
    );