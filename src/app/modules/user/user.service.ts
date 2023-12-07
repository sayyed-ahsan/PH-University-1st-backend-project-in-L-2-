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
  // userData.role = "student";

  //set manually generated it
  userData.id = "203010000166677";
  // console.log(userData, "ssssss");
  // create a user
  const newUser = await User.create(userData);
  console.log(newUser);
  const newVariable = {
    ...newUser,
  };
  console.log(newVariable);
  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    // studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
