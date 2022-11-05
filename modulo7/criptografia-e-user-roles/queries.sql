-- Active: 1665681304438@@35.226.146.116@3306@Hopper-4313967-gabriel-oliveira

CREATE TABLE
    Users_Authentication (
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );