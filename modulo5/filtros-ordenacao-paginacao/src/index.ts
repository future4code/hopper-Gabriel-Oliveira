import express from "express";
import cors from "cors";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersType } from "./endpoints/getAllUsersType";
import { getAllByOrder } from "./endpoints/getAllByOrder";
import { getAllByPage } from "./endpoints/getAllByPage";
import { getAllByFilters } from "./endpoints/getAllByFilters";


export const app = express();

app.use(express.json());
app.use(cors());



app.get("/getAllEmployeesLabenu", getAllUsers);

app.get("/getEmployeesType/:type", getAllUsersType);

app.get("/getEmployeesByOrder", getAllByOrder);

app.get("/getAllByPage", getAllByPage);

app.get("/getAllByFilters", getAllByFilters);
























app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});