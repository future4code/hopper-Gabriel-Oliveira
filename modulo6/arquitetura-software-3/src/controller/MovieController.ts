import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { createMovieDTO } from "../models/MovieDTO";


export class MovieController{
    
    //CREATE MOVIE
    async create(req: Request, res: Response):Promise<void>{
        try {
            const {title, description, duration_in_minutes, year_of_release } = req.body

            const input: createMovieDTO ={
                title,
                description,
                duration_in_minutes,
                year_of_release
            }

            const movieBusiness = new MovieBusiness();
            await movieBusiness.create(input);
            res.status(201).send({message: "Filme criado com sucesso!"})
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    //GET ALL MOVIES
    async get(req: Request, res: Response): Promise<void> {
        try {
    
            const movieBusiness = new MovieBusiness()
            const movie = await movieBusiness.get();
    
            res.send(movie).status(200);
    
        } catch (error: any) {
            res.send({ message: error.message }).status(error.status);
        }
    }
}