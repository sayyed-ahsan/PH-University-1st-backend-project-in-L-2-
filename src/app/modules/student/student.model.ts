import { Schema, model } from "mongoose";
import { TStudent } from "./student.interface";

const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
    required: [true, "ID is required"],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User id is required"],
    unique: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
});

export const Student = model<TStudent>("Student", studentSchema);
