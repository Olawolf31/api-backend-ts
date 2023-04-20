import { Schema, model, Document } from "mongoose";

interface Movie extends Document {
  id: string;
  title: string;
  genre: string;
  rating: number;
  year: number;
  dateAdded: Date;
}

const movieSchema = new Schema({
  id: String,
  title: String,
  genre: String,
  rating: Number,
  year: Number,
  dateAdded: { type: Date, default: Date.now },
});

export const Movies = model<Movie>("Movies", movieSchema);
