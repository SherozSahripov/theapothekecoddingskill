import { Request, Response } from "express";
import { generalService } from "../services";
export const generalController = async (req: Request, res: Response) => {
  try {
    // const { topNo } = req.query;
    const response = await generalService(req.query);

    return res.send(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
