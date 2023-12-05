import { Request, RequestHandler, Response } from "express";
import { NextFunction } from "express";
import { StudentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";

// ---------------------
// ---------------------

const getAllStudents = catchAsync(async (req, res, next) => {
  const data = await StudentServices.getAllStudentfromDB();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    success: true,
    message: "Successfully Created",
    data: data,
  });
});

// ---------------------
// ---------------------

const getStudentByID = catchAsync(async (req, res, next) => {
  const studentDat = await StudentServices.gelStudentByIdfromDB(req.params._id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    success: true,
    message: "Successfully Got",
    data: studentDat,
  });
});

export const StudentController = {
  getAllStudents,
  getStudentByID,
};
