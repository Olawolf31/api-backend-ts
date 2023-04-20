import { Router } from "express";
import {
  addNewMovie,
  getAllMovies,
  getSingleMovie,
  deleteMovie,
  updateMovie,
} from "../controllers/moviesLogic";

const router = Router();

router.post("/", addNewMovie);
router.get("/", getAllMovies);
router.get("/:id", getSingleMovie);
router.delete("/:id", deleteMovie);
router.put("/:id", updateMovie);

export default router;
