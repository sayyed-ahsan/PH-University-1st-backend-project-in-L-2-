import express from "express";
import { StudentController } from "./student.controller";

const route = express.Router();

route.get("/", StudentController.getAllStudents);
route.get(`/:_id`, StudentController.getStudentByID);

export const StudentRout = route;
