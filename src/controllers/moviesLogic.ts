import { RequestHandler, Request, Response } from "express";
import { Movies } from "../models/movies";

//Movies routes

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
