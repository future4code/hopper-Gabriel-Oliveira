ALTER TABLE List_Projetos_Empresa
DROP COLUMN title;

SELECT * FROM List_Projetos_Empresa;

ALTER TABLE List_Projetos_Empresa
CHANGE date dueDate VARCHAR(10) NOT NULL;

SELECT * FROM List_Projetos_Empresa;

ALTER TABLE List_Funcionarios
MODIFY email VARCHAR(100) UNIQUE;

SELECT * FROM List_Funcionarios;



