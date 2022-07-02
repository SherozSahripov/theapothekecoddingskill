import { Router, Request, Response, NextFunction } from "express";
import { generalController } from "../controllers";
const router = Router();

router.post("/", (req: Request, res: Response) => {
  generalController(req, res);
});

export default router;
