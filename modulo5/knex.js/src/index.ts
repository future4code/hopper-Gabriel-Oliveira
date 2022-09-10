import express, { Request, Response } from 'express';
import cors from "cors";
import connection from './database/connection';
import { Employee } from './types/types';
import { connect } from 'http2';

const app = express();

app.use(express.json());
app.use(cors());



// EXE 1
app.get("/employees", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const search = req.query.search;
    const result = await connection.raw(`
    SELECT * FROM List_Funcionarios
    `)

    if (search) {
      const resultSearch = await connection.raw(`
      SELECT * FROM List_Funcionarios
      WHERE nome = "${search}"
      `)

      if (resultSearch[0].length === 0) {
        res.status(200).send(result[0])
      }
      res.status(200).send(resultSearch[0])
    }

    res.status(200).send(result[0])

  } catch (error) {
    res.status(errorCode).send(error.message);
  }
})


//EXE 2

app.post("/registerEmployee", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const { nome, email } = req.body;
    const checkEmail = await connection.raw(`
    SELECT * FROM List_Funcionarios
    WHERE email = "${email}"
    `)

    if (!nome || !email) {
      errorCode = 422
      throw new Error("Parâmetro 'nome' ou 'email' não informado.");
    }
    if (typeof nome && typeof email !== 'string') {
      errorCode = 422
      throw new Error("Os parâmetros nome e email precisam ser do tipo string.");
    }
    const regExp = /^(\w+)@[a-z]+(.[a-z]+){1,2}$/i

    if (regExp.test(email) !== true) {
      errorCode = 422
      throw new Error("Deve ser passado um email valido.");
    }

    if (nome.length < 4) {
      errorCode = 422
      throw new Error("O parâmetro nome precisa ser maior que 4 caracteres.");
    }
    if (checkEmail[0].length > 0) {
      errorCode = 422
      throw new Error("Email já cadastrado.");
    }

    const newEmployee: Employee = {
      id: String(Math.random().toFixed(2)),
      nome,
      email
    }

    await connection.raw(`
    INSERT INTO List_Funcionarios(id, nome, email)
    VALUES ("${newEmployee.id}", "${newEmployee.nome}", "${newEmployee.email}")
    `)

    res.status(200).send("Usuário criado com sucesso")


  } catch (error) {
    res.status(errorCode).send(error.message)

  }
})


//EXE 3

app.put("/editEmail", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.query.id
    const email = req.body.email

    const idEmployee = await connection.raw(`
    SELECT * FROM List_Funcionarios
    WHERE id = "${id}"
    `)

    const emailEmployee = await connection.raw(`
    SELECT * FROM List_Funcionarios
    WHERE email = "${email}"
    `)

    if (idEmployee[0].length === 0) {
      errorCode = 422
      throw new Error("Usuário não encontrado.");
    }

    if (emailEmployee[0].length > 0) {
      errorCode = 422
      throw new Error("Email já existe.");
    }

    if (!email) {
      errorCode = 422
      throw new Error("O campo email precisa sem prenchido.");
    }

    if (!id) {
      errorCode = 422
      throw new Error("O campo id precisa sem prenchido.");
    }

    if (typeof email !== "string") {
      errorCode = 422
      throw new Error("O email precisa ser do tipo 'string'.");
    }

    const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i

    if (regExp.test(email) !== true) {
      errorCode = 422
      throw new Error("Deve ser passado um email valido.");
    }


    await connection.raw(`
    UPDATE List_Funcionarios
    SET email = "${email}"
    WHERE id = "${id}"
    `)

    res.status(200).send("Email alterado com sucesso!")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})




// EXE 4 

app.delete("/deleteEmployee", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const id = req.query.id


    const employee = await connection.raw(`
    SELECT * FROM List_Funcionarios
    WHERE id = "${id}";      
    `)


    if (employee[0].length === 0) {
      errorCode = 422
      throw new Error("Funcionário não encontrado.");
    }

    if (!id) {
      errorCode = 422
      throw new Error("Digite o Id do Funcionário.");
    }


    await connection.raw(`
    DELETE FROM List_Funcionarios
    WHERE id = "${id}";
    `)

    res.status(200).send("Funcionário deletado com sucesso!")

  } catch (error) {
    res.status(error).send(error.message)
  }
})















app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});