import { BaseDatabase } from "./BaseDatabase";
import { Movies } from "../models/Movies";


export class MoviesDataBase extends BaseDatabase{
    private static TABLE_MOVIES = 'LABEFLIX_MOVIE'

    //CREATE MOVIE
    async create({id, title, description, duration_in_minutes, year_of_release}: any): Promise<void>{
        await MoviesDataBase.connection
        .insert({
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
        .into(MoviesDataBase.TABLE_MOVIES)
    }

    //GET ALL MOVIES

    public async get(): Promise<Movies[]> {

        try {
    
            const movies: Movies[] = [];
    
            const result = await BaseDatabase.connection()
                .select("*")
                .from(MoviesDataBase.TABLE_MOVIES);
    
            for (let movie of result) {
                movies.push(movie);
            }
    
            return movies;
    
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}