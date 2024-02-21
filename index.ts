import express from "express";
import userRouter from "./src/routes/user-router";
import postRouter from "./src/routes/post-router";
import rankRouter from "./src/routes/rank-router";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/v1/user", userRouter);
app.use("/v1/rank", rankRouter);
app.use("/v1/post", postRouter);

app.listen(3100, () => {
  console.log("listening in port 3100");
});
