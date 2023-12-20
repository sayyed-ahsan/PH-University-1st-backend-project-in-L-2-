import express, { Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/", router);

const getController = (req: Request, res: Response) => {
  res.send(`Hello`);
};

app.get("/", getController);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
