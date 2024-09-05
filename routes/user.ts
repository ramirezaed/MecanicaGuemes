import express, { Request, Response } from "express";
import { userController } from "../controllers/controllerUser";

const usersRouter = express.Router();

usersRouter.get("/getUsers", userController.getUsers);

usersRouter.get("/user-data", (req: Request, res: Response) => {
  res.send("user data");
});

usersRouter.get("/user-settings", (req: Request, res: Response) => {
  res.send("user settings");
});

usersRouter.post("/create-user", userController.createUser);

export default usersRouter;
