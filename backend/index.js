import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "./db/config.db.js";

// Load environment variables from .env file

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN, // Change this to your frontend URL
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.error("Failed to connect to the database");
    process.exit(1); // Exit the process with an error code
  });

import userRouter from "./routes/user.route.js";
import blogRouter from "./routes/blog.route.js";
import likeRouter from './routes/like.route.js'
import commentRouter from './routes/comment.route.js'
import favRouter from './routes/favourite.route.js'


app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.use("/api/like", likeRouter);
app.use("/api/comment", commentRouter);
app.use("/api/fav", favRouter);
