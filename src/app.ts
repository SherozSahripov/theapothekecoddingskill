import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
require("dotenv").config();

import middlewares from "./middlewares";
import api from "./api";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.json({
    message: "OK",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
