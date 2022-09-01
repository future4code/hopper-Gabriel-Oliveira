ALTER TABLE List_Projetos_Empresa
ADD description VARCHAR(200) NOT NULL;

UPDATE List_Projetos_Empresa
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = "001";

UPDATE List_Projetos_Empresa
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "002";

UPDATE List_Projetos_Empresa
SET description =   "Projeto de rede de comunicação da Labenu."
WHERE id = "003";

SELECT * FROM List_Projetos_Empresa;