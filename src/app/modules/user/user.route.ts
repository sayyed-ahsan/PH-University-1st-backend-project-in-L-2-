import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";
import { AnyZodObject } from "zod";
import { createStudentValidationSchema } from "../student/student.ZodValidation";

const router = express.Router();

const validationRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (err) {
      next(err);
    }
  };
};

router.post(
  "/create-student",
  // validationRequest(createStudentValidationSchema),
  UserControllers.createStudent
);

export const UserRoutes = router;
