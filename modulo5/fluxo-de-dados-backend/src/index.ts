import express, {Request, Response} from "express";
import cors from "cors"
import { listProdutos } from "./data";
import { Produtos } from "./types";


const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () =>{
    console.log("Server is running in http://localhost:3003")
})

let statusCode : number = 400


// Ex 1 -
app.get("/teste", (req: Request, res: Response) => {
    res.status(200).send("Request completed successfully!");
  });
  


// Ex 3 -
app.post("/createProduct", (req: Request, res: Response) => {
    const {name, price} = req.body;
  
    try {
      if (!name || !price) {
        statusCode = 422
        throw new Error("Parâmetro 'name' ou 'price' não informado.")
      };
      if (typeof name !== 'string') {
        statusCode = 422
        throw new Error("Parâmetro 'name', precisa ser do tipo 'string'.")
      }
      if (typeof price !== 'number') {
        statusCode = 422
        throw new Error("Parâmetro 'price', precisa ser do tipo 'number'.")
      };
      if (price < 0) {
        statusCode = 422
        throw new Error("Valor de 'price', precisa ser maior que 0.")
      }
  
      const newProduct = {
        id: Date.now().toString(),
        name,
        price
      };
  
      listProdutos.push(newProduct);
      res.status(201).send(listProdutos);
  
    } catch ( error: any ) {
      res.status(statusCode).send(error.message);
    };
  });


  //4
  app.get("/searchProducts", (req: Request, res: Response) => {
    const search = (req.query.search)?.toString()
    try {
      if (search) {
        const buscar = listProdutos.filter(produto => produto.name.toLowerCase().includes(search.toLowerCase()))
        if (!buscar) {
          statusCode = 404;
          throw new Error("Produto não encontrado.");
        }
        res.status(200).send(buscar);
      } else {
        res.status(200).send(listProdutos);
      }
    } catch ( error: any ) {
      res.status(statusCode).send(error.message)
    };
  });



  // Ex 5 
app.put("/products/edit", (req: Request, res: Response) => {
  const id = req.query.id;
  const {price, name} = req.body;

  try {
    if(!id) {
      statusCode = 422;
      throw new Error("Parâmetro id não informado.");
    };
    const busca = listProdutos.find(produto => produto.id === id);
    if (!busca) {
      statusCode = 404;
      throw new Error("Produto não encontrado.");
    }
    if (!price && !name) {
      statusCode = 422
      throw new Error("Parâmetro 'price' ou 'name' não informado.")
    }
    if (price) {
      if (typeof price !== 'number') {
        statusCode = 422
        throw new Error("O argumento 'price' necessita ser do tipo 'number'");
      }
      if (price <= 0) {
        statusCode = 422
        throw new Error("Valor do parâmetro 'price', precisa ser maior do que 0.")
      }
      busca.price = price;
    } 
    if (name) {
      if (typeof name !== 'string') {
        statusCode = 422
        throw new Error("O argumento 'name' necessita ser do tipo 'string'");
      }
      busca.name = name;
    }

    res.status(200).send(listProdutos);

  } catch ( error: any ) {
    res.status(statusCode).send(error.message);
  };
});




// Ex 6

// Ex 6 -
app.delete("/products/delete" , (req: Request, res: Response) => {
  const id = req.query.id

  try {
    if (!id) {
      statusCode = 422
      throw new Error("Argumento 'id' não informado.")
    }

    const busca = listProdutos.findIndex(produto => produto.id === id)
    if (busca < 0) {
      statusCode = 404;
      throw new Error("Produto não encontrado.");
    }

    listProdutos.splice(busca, 1)
    res.status(200).send(listProdutos)
  } catch ( error: any ) {
    res.status(statusCode).send(error.message)
  }
})