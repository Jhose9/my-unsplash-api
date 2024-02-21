import express from "express";
import {
  NewPost,
  GetAll,
  PostLike,
  GetAllLike,
  GetPost
} from "../Controller/postsControllers";

const router = express.Router();

router
  .get("/all", GetAll)
  .get("/like/all", GetAllLike)
  .get("/:id",GetPost)
  .post("/like/:id", PostLike)
  .post("/:id", NewPost)

export default router;
