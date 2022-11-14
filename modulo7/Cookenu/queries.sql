-- Active: 1665681304438@@35.226.146.116@3306@Hopper-4313967-gabriel-oliveira

DROP TABLE `Cookenu_Users`, `Cookenu_Recipes`;


CREATE TABLE Cookenu_Users(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(10) NOT NULL DEFAULT "NORMAL"
);

CREATE TABLE  Cookenu_Recipes(
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "Empty revenue field.",
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    author_id VARCHAR(64) NOT NULL,
    FOREIGN KEY (author_id) REFERENCES Cookenu_Users(id)
);