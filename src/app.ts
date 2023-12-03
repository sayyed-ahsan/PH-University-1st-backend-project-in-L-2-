import express, { Request, Response } from "express";
import cors from "cors";
import { StudentRout } from "./app/modules/student/student.route";
import globalErrorHandler from "./app/middelware/globalErroHandeler";
import notFound from "./app/middelware/notFound";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", StudentRout);

const getController = (req: Request, res: Response) => {
  res.send(`Hello `);
};

app.get("/", getController);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
