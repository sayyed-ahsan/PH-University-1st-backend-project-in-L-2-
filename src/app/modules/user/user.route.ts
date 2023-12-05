import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";
import { AnyZodObject } from "zod";
import { StudentValidationSchema } from "../student/student.ZodValidation";

const router = express.Router();

const validationRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body, "ssssssss");

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
  validationRequest(StudentValidationSchema),
  UserControllers.createStudent
);

export const UserRoutes = router;
