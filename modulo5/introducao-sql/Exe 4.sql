SELECT * FROM List_Funcionarios;

SELECT id AS identifier, nome FROM List_Funcionarios;

SELECT * FROM List_Funcionarios WHERE id = "003";

SELECT * FROM List_Funcionarios WHERE nome LIKE "%a%";

SELECT * FROM List_Funcionarios WHERE nome NOT LIKE "%r%" AND email LIKE "%u%";