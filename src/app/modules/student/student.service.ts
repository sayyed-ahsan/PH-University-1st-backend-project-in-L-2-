import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const getAllStudentfromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const gelStudentByIdfromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });

  return result;
};

const creatStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StudentServices = {
  creatStudentIntoDB,
  getAllStudentfromDB,
  gelStudentByIdfromDB,
};
