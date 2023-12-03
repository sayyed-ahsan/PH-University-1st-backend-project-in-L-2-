import express from "express";
import { StudentController } from "./student.controller";

const route = express.Router();

route.get("/", StudentController.getAllStudents);
route.get(`/:_id`, StudentController.getStudentByID);
route.post("/create-student", StudentController.createStuden);

export const StudentRout = route;
