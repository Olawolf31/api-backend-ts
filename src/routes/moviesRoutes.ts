import { Router } from "express";
import { addNewMovie, getAllMovies } from "../controllers/moviesLogic";

const router = Router();

router.post("/", addNewMovie)
router.get("/", getAllMovies)
export default router;