import { Request, Response } from "express";
import { generalService } from "../services";
export const generalController = async (req: Request, res: Response) => {
  try {
    // const { topNo } = req.query;
    const response = await generalService(req.query);
    if (!response) {
      return res.status(404).json({
        message: "No data found",
      });
    }
    return res.send(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
