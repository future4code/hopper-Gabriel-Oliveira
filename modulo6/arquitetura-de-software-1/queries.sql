-- Active: 1665681304438@@35.226.146.116@3306@Hopper-4313967-gabriel-oliveira

DROP TABLE IF EXISTS User_Arq;

CREATE TABLE
    User_Arq (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );

INSERT INTO
    User_Arq (id, name, email, password) VALUE 
            ('87858455', 'Gabriel Oliveira', 'gabriel@gmail.com ', ' uihiudd7gwdudw'),
            ('96469384', 'Bárbara Zanardo', 'baat@gmail.com', 'uqeuduqwbdqub');

    