import express, {Request, Response} from 'express'
import cors from 'cors'
import { posts, users } from './data'

const app = express()
app.use (express.json())
app.use(cors())


app.listen(3003, () =>{
    console.log("Server is running in http://localhost:3003")
})


//Exercício //1

app.get("/teste", (req: Request, res: Response) => {          
    res.send("Hello from Express")
})




//Exercício //4
app.get("/users", (req: Request, res: Response)=>{
    res.send(users)
})



//Exercício //7
app.get("/posts", (req: Request, res: Response)=>{
    res.send(posts)
})


//Exercício //8
app.get("/get/post", (req: Request, res: Response) => {
    const userId = req.query.userId
    if(!userId) {
      res.status(400).send("UserId é Obrigatório!")
    } 
    const postEscolhido = posts.filter(post => post.userId === userId)
    res.send(postEscolhido)
  })



//Exercício //9 
app.delete("/del/posts", (req: Request, res: Response) => {
    const postId = req.query.postId
    if(!postId) {
      res.status(400).send("O postId é Obrigatório!")
    } 
  
    const deletePost = posts.filter(post => post.id !== postId)
    res.status(200).send(deletePost)
  })


//Exercício //10
app.delete("/del/user", (req: Request, res: Response) => {
    const userId = req.query.userId
    if(!userId) {
      res.status(400).send("userId Obrigatório!")
    } 
  
    const deleteUser = users.filter(user => user.id !== userId)
    res.status(200).send(deleteUser)
  })