import express from "express";
import { StudentController } from "./student.controller";

const route = express.Router();

route.get("/", StudentController.getAllStudents);
route.get(`/:_id`, StudentController.getStudentByID);
route.patch(`/:id`, StudentController.updateStudent);
route.delete(`/:_id`, StudentController.deleteStudent);

export const StudentRout = route;
