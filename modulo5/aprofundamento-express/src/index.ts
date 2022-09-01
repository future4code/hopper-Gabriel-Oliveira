import  express, {Request, Response}  from "express";
import cors from 'cors'
import { listAfazeres } from "./data";
import {Afazeres} from "./types"

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () =>{
    console.log("Server is running in http://localhost:3003")
})




//1
app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
})


//4
app.get("/completed/:isComplete", (req: Request, res: Response) =>{
    let isComplete: any = req.params.isComplete

    if (isComplete === "true") {
        isComplete = true;
      } else if (isComplete=== "false") {
        isComplete = false;
      }
    
    const afazeresCompletes = listAfazeres.filter(complete => complete.completed === isComplete)
    res.send(afazeresCompletes)
})



//5
app.post("/addTask", (req: Request, res: Response) =>{
    const { userId, id, title, completed }: Afazeres = req.body

    if(!userId || !id || !title || !completed) {
        res.status(400).send("Esta faltando alguma informação no body.")
      }

      listAfazeres.push({ userId, id, title, completed })
      res.status(200).send({ listAfazeres })
})


//6
app.put("/afazeres/edit", (req: Request, res: Response) =>{
  const userId = Number(req.query.userId)
  const id = Number(req.query.id)
  const completed = req.body.completed


  if(!userId || !id) {
    res.status(400).send("Querys Obrigatórias!")
  }
  if(!completed) {
    res.status(400).send("Status do Body Obrigatório!")
  }


  listAfazeres.forEach(task => {
    if(task.userId == userId) {
      if(task.id == id){
        task.completed = completed
      }
    }
  })

  res.status(200).send(listAfazeres)
})


//7
app.delete("/afazeres/del", (req: Request, res: Response) => {
  const userId = Number(req.query.userId)
  const id = Number(req.query.id)
  
  
  if(!userId || !id) {
    res.status(400).send("Querys Obrigatórias!")
  } 

  listAfazeres.filter((afazer, x) => {
    if (afazer.userId === userId) {
      if (afazer.id === id) {
        listAfazeres.splice(x, 1)
      }
    }
    return afazer
  })
  res.status(200).send(listAfazeres)
})


//8
app.get("/afazeres/user", (req: Request, res: Response) => {
  const  userId  = Number(req.query.userId)

  if(!userId){
    res.status(400).send("Parâmetro Obrigatório!")
  }

  const userAfazeres = listAfazeres.filter(afazer => {
    return afazer.userId === userId
  }).map(afazer => afazer)
  res.status(200).send(userAfazeres)
})


