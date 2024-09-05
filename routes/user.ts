import express, { Request, Response } from "express";

const usersRouter = express.Router();

usersRouter.get("/", (req: Request, res: Response) => {
  res.send("hello user");
});

usersRouter.get("/user-data", (req: Request, res: Response) => {
  res.send("user data");
});

usersRouter.get("/user-settings", (req: Request, res: Response) => {
  res.send("user settings");
});

export default usersRouter;
