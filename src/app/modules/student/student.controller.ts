import { StudentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";

// ---------------------
// ---------------------

const getAllStudents = catchAsync(async (req, res, next) => {
  const query = req.query;
  const data = await StudentServices.getAllStudentsFromDB(query);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    success: true,
    message: "Successfully get all students",
    data: data,
  });
});

// ---------------------
// ---------------------

const getStudentByID = catchAsync(async (req, res, next) => {
  const studentDat = await StudentServices.getStudentByIdFromDB(req.params._id);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    success: true,
    message: "Successfully Got this student",
    data: studentDat,
  });
});
// ---------------------
// ---------------------

const updateStudent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { student } = req.body;

  // console.log(student);

  const result = await StudentServices.updateStudentIntoDB(id, student);
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    success: true,
    message: "Successfully Updated this student",
    data: result,
  });
});

// ---------------------
// ---------------------

const deleteStudent = catchAsync(async (req, res, next) => {
  const deletedStudentData = await StudentServices.deleteStudentFromDB(
    req.params._id
  );
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    success: true,
    message: "Successfully deleted this students",
    data: deletedStudentData,
  });
});

export const StudentController = {
  getAllStudents,
  getStudentByID,
  updateStudent,
  deleteStudent,
};
