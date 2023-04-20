import { RequestHandler, Request, Response } from "express";
import { Movies } from "../models/movies";

//movies routes
export const addNewMovie: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { title, genre, rating, year }: movieType = req.body;

    const newMovie = new Movies({ title, genre, rating, year });

    await newMovie.save();
    res.status(200).json({ message: "Movie added successfully" });
  } catch (error: unknown) {
    if (typeof error === "string") {
      res.status(400).json({ message: error });
    } else if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//get all movies

export const getAllMovies: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const movies = await Movies.find();
    res.status(200).json({
      message: "returned all movies",
      movies: movies,
    });
  } catch (error: unknown) {
    if (typeof error === "string") {
      res.status(400).json({ message: error });
    } else if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//get movie by id
export const getSingleMovie: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const movie = await Movies.findById(id);
    res.status(200).json({
      message: "returned single movie",
      movie: movie,
    });
  } catch (error: unknown) {
    if (typeof error === "string") {
      res.status(400).json({ message: error });
    } else if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//delete movie by id
export const deleteMovie: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    await Movies.findByIdAndDelete(id);
    res.status(200).json({
      message: "movie deleted",
    });
  } catch (error: unknown) {
    if (typeof error === "string") {
      res.status(400).json({ message: error });
    } else if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//update movie by id
export const updateMovie: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { title, genre, rating, year }: movieType = req.body;

    const updatedMovie = await Movies.findByIdAndUpdate(
      id,
      { title, genre, rating, year },
      { new: true }
    );
    res.status(200).json({
      message: "movie updated",
      updatedMovie,
    });
  } catch (error: unknown) {
    if (typeof error === "string") {
      res.status(400).json({ message: error });
    } else if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};
