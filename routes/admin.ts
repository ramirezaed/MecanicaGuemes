import express, { Request, Response, NextFunction } from "express";
import controller from "../controllers/controllerAdmin";
const adminRouter = express.Router();

function isAdmin(req: Request, res: Response, next: NextFunction) {
  // Verificar que el cuerpo de la solicitud no esté vacío y tenga la propiedad isAdmin
  if (req.body && req.body.isAdmin) {
    next();
  } else {
    res.status(401).send("unauthorized user");
  }
}

adminRouter.post("/", isAdmin, (req: Request, res: Response) =>
  controller(req, res)
);

adminRouter.post("/dashboard", isAdmin, (req: Request, res: Response) => {
  res.send("welcome page dashboard");
});

export default adminRouter;
