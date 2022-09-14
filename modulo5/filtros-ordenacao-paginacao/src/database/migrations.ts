import connection from "./connection";

const criarTabelaProdutos = async () => {
    try {
        await connection.raw(`
            CREATE TABLE Filtros_Ordenacao_Paginacao(
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            type VARCHAR(255) NOT NULL
            );
        `)

        console.log("Tabela Filtros_Ordenacao_Paginacao criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Filtros_Ordenacao_Paginacao.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaProdutos() {
    try {
        await connection.raw(`
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (1,'Soter','soter@labenu','Teacher');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (2,'João','joao@labenu','Teacher');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (3,'Paula','paula@labenu','Teacher');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (4,'Amanda','amanda@labenu','Teacher');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (5,'Darvas','darvas@labenu','Teacher');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (6,'Severo','severo@labenu','Teacher');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (7,'Caio','caio@labenu','Teacher');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (8,'Chijo','chijo@labenu','Teacher');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (9,'Lais','lais@labenu','Teacher');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (10,'Bruno','bruno@labenu','Teacher');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (11,'Luciano','luciano@labenu','Operations');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (12,'Miau','miau@labenu','Operations');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (13,'Sekine','sekine@labenu','Operations');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (14,'Nathalia','nathalia@labenu','Operations');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (15,'Amanda','amandaop@labenu','Operations');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (16,'Rebeca','rebeca@labenu','Operations');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (17,'Jean','jean@labenu','Operations');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (18,'Vitória','vitoria@labenu','Operations');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (19,'Fernanda','fernanda@labenu','Operations');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (20,'Tainah','tainah@labenu','Operations');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (21,'Aline','aline@labenu','CX');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (22,'Nathalia','nathaliacx@labenu','CX');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (23,'Layla','layla@labenu','CX');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (24,'Jonathan','jonathan@labenu','CX');
        INSERT INTO Filtros_Ordenacao_Paginacao (id,name,email,type) VALUES (25,'Maju','maju@labenu','CX');
        `)

        console.log("Tabela Filtros_Ordenacao_Paginacao populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela Filtros_Ordenacao_Paginacao.")
        console.log(error.sqlMessage)
    }
}

criarTabelaProdutos()
    .then(() => popularTabelaProdutos())
    .finally(() => process.exit())