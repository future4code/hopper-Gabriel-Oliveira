import express from 'express'
import { MovieController } from '../controller/MovieController'

export const moviesRouter = express.Router()

const moviesController = new MovieController()

moviesRouter.post("/create", moviesController.create)
moviesRouter.get("/getAll", moviesController.get)