import express, { Request, Response } from "express";
import cors from "cors"
import { users } from "./data";
import { ROLES } from "./type";


const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})


// Ex 1 -
// a) O método HTTP utilizado para requisitar todos os usuários é o GET.
// b) Utilizaria "/user".

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})



// Ex 2 -
// a) Utilizando um params.
// b) Validação e comprando ao ENUM criado.

app.get("/users/:type", (req: Request, res: Response) => {
    let statusCode = 500
    const type = (req.params.type as string).toUpperCase()

    try {
        if (!type) {
            statusCode = 422
            throw new Error("Query 'type', não informado.");
        }

        if (type !== ROLES.NORMAL && type !== ROLES.ADMIN) {
            statusCode = 422
            throw new Error("O tipo informado precisa ser 'ADMIN' ou 'NORMAL'.");
        }

        const userType = users.filter(user => user.type === type)

        if (!userType.length) {
            statusCode = 404
            throw new Error("Usuário não encontrado");
        }

        res.status(200).send(userType)

    } catch (error: any) {
        res.status(statusCode).send({ message: error.message })
    }
})




// Ex 3 -
// a) QueryParams
// b) Letra B **

app.get("/user/name", (req: Request, res: Response) => {
    let statusCode = 500
    const name = (req.query.name as string).toLowerCase()

    try {
        if (!name) {
            statusCode = 422
            throw new Error("Query 'name' obrigatório.");
        }

        const search = users.filter(user => (user.name).toLowerCase().includes(name))

        if (!search.length) {
            statusCode = 404
            throw new Error("Usuário não encontrado.");
        }

        res.status(200).send(search)

    } catch (error: any) {
        res.status(statusCode).send({ message: error.message })
    }
})



// Ex 4 -
// a) Não houve nenhuma alteração, somente o método.
// b) O método PUT é a requisição responsável por modificar os dados da API.



app.post("/createProduct", (req: Request, res: Response) => {
    const { name, email, type, age } = req.body;
    let statusCode = 500

    try {
          if (!name || !email || !type || !age) {
            statusCode = 422
            throw new Error("Parâmetro 'name', 'email', 'type' ou  'age'  não informado.")
          };
          if (typeof name !== 'string') {
            statusCode = 422
            throw new Error("Parâmetro 'name', precisa ser do tipo 'string'.")
          };
          if (typeof email !== 'string') {
            statusCode = 422
            throw new Error("Parâmetro 'email', precisa ser do tipo 'number'.")
          };

          if (typeof age !== 'number') {
            statusCode = 422
            throw new Error("Parâmetro 'age', precisa ser do tipo 'number'.")
          };
          if (age < 0) {
            statusCode = 422
            throw new Error("Valor de 'age', precisa ser maior que 0.")
          }

        const newUser = {
            id: Date.now(),
            name,
            email,
            type,
            age
        };

        users.push(newUser);
        res.status(201).send(users);

    } catch (error: any) {
        res.status(statusCode).send(error.message);
    };
});

