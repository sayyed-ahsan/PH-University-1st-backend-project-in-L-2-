import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";
import { AnyZodObject } from "zod";
import { validationRequest } from "../../middlewares/validateRequest";
import { createStudentValidationSchema } from "../student/student.ZodValidation";

const router = express.Router();

router.post(
  "/create-student",
  // validationRequest(createStudentValidationSchema),
  UserControllers.createStudent
);

export const UserRoutes = router;
