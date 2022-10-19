import { MoviesDataBase } from "../data/MovieDataBase";
import { v4 as generateId } from "uuid";
import { Movies } from "../models/Movies";
import { createMovieDTO } from "../models/MovieDTO";

export class MovieBusiness {
  //CREATE MOVIE
  async create(input: createMovieDTO): Promise<void> {
    const {title, description, duration_in_minutes, year_of_release} = input
    if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new Error(
        "Dados inválidos (title, description, duration_in_minutes, year_of_release)"
      );
    }

    const id = generateId();

    const movieDataBase = new MoviesDataBase();
    await movieDataBase.create({
      id,
      title,
      description,
      duration_in_minutes,
      year_of_release,
    });
  }

  //GET ALL MOVIES
  async get(): Promise<Movies[]> {
    const movieDataBase = new MoviesDataBase();
    return await movieDataBase.get();
  }
}
