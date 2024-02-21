import express from "express";
import { GetRank } from "../Controller/ranksControllers";

const router = express.Router();

router.get("/", GetRank);

export default router;
