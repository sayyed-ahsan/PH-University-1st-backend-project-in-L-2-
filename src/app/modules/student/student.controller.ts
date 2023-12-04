import { Request, RequestHandler, Response } from "express";
import { NextFunction } from "express";
import { StudentServices } from "./student.service";
// import { StudentValidationSchema } from "./student.ZodValidation";

const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const data = await StudentServices.getAllStudentfromDB();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const getStudentByID: RequestHandler = async (req, res, next) => {
  try {
    const studentDat = await StudentServices.gelStudentByIdfromDB(
      req.params._id
    );
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
      success: true,
      message: "Successfully Got",
      data: studentDat,
    });
  } catch (error) {
    next(error);
  }
};

const createStuden: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const student = req.body.student;

    // const zodParseData = StudentValidationSchema.parse(student);

    const result = await StudentServices.creatStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  createStuden,
  getAllStudents,
  getStudentByID,
};
