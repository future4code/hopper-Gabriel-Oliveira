import express from 'express'
import { PostController } from '../controller/PostController'

export const postsRouter = express.Router();

const postsController = new PostController();

postsRouter.post('/create', postsController.create)
postsRouter.get('/get/:id', postsController.get)