import { Types } from "mongoose";

export type Student = {
  id: number;
  user: Types.ObjectId;
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  grade: string;
  courses: string[];
  isInternational: boolean;
  address: {
    street: string;
    city: string;
    country: string;
    zipCode: string;
  };
  contactInfo?: {
    email: string;
    phone?: string;
  };
};
