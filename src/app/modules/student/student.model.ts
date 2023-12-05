import { Schema, model } from "mongoose";
import { Student } from "./student.interface";

const studentSchema = new Schema<Student>({
  password: { type: String },
  student: {
    id: { type: Number, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "User",
    },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    grade: { type: String, required: true },
    courses: { type: [String], required: true },
    isInternational: { type: Boolean, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      zipCode: { type: String, required: true },
    },
    contactInfo: {
      email: { type: String, required: true },
      phone: { type: String },
    },
  },
});

export const StudentModel = model<Student>("Student", studentSchema);
