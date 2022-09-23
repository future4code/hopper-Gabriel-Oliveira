import express from "express";
import cors from "cors";
import { createUser } from "./endpoints/CreateUser";
import { getUsers } from "./endpoints/GetUsers";
import { createProducts } from "./endpoints/CreateProduct";
import { getProducts } from "./endpoints/GetProducts";
import { RegisterPurchases } from "./endpoints/RegisterPurchases";
import { getUserPurchases } from "./endpoints/GetUserPurchases";

const app = express();

app.use(express.json());
app.use(cors());


//CRIAR USUÁRIO
app.post("/createUser", createUser);

//REQUISITAR TODOS OS USÁRIOS
app.get("/getUsers", getUsers);

//CRIAR PRODUTOS
app.post("/createProducts", createProducts);

//REQUISITAR TODOS OS PRODUTOS
app.get("/getProducts", getProducts);

//REGISTRAR COMPRAS DE UM USUÁRIO
app.post("/purchases", RegisterPurchases);

//REQUISITAR USUÀRIOS E SUAS COMPRAS
app.get("/users/:user_id/purchases", getUserPurchases);








app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});