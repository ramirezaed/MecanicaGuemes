import express, { Request, Response } from "express";
import User from "../model/user";

//defino clase
class UserController {
  //genero los metodos del controlador usuario

  async createUser(req: Request, res: Response) {
    try {
      const newUser = await User.create(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }
}

export const userController = new UserController();
