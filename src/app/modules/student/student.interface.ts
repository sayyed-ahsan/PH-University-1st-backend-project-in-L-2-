import { Model, Types } from "mongoose";

export type TStudent = {
  id?: string;
  user: Types.ObjectId;
  name: string;
  email: string;
};
