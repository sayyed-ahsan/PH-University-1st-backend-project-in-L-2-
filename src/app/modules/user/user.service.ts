import mongoose, { Error } from "mongoose";
import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  // console.log(studentData, "inside service");
  const userData: Partial<TUser> = {};
  // console.log(s, "ssassss");
  //if password is not given , use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = "student";

  //set manually generated it
  userData.id = "203010001122333344667788995566";
  // console.log(userData, "ssssss");
  // create a user
  const session = await mongoose.startSession();

  try {
    await session.startTransaction();
    const newUser = await User.create([userData], { session });
    console.log(newUser);
    const newVariable = {
      ...newUser,
    };
    console.log(newVariable);
    //create a student
    if (!newUser.length) {
      throw new Error("not done");
    }
    studentData.id = newUser[0].id;
    studentData.user = newUser[0]._id; //reference _id

    const newStudent = await Student.create([studentData], { session });
    if (!newStudent) {
      throw new Error("not done");
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err) {
    console.log(err, "serviceeeee");
    session.abortTransaction();
    session.endSession();
    throw new Error("from service");
  }
};

export const UserServices = {
  createStudentIntoDB,
};
