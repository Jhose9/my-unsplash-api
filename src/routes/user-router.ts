import express from "express";
import {
  PostRegister,
  GetAllUser,
  UserLogin,
} from "../Controller/userControllers";

const router = express.Router();

router
  .post("/", PostRegister)
  .post("/login", UserLogin)
  .get("/all", GetAllUser);

export default router;
