import { z } from "zod";

// Define a Zod schema for the address field
const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
  zipCode: z.string(),
});

// Define a Zod schema for the contactInfo field
const contactInfoSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
});

// Define the main Zod schema for the student
export const StudentValidationSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      id: z.number(),
      name: z.string(),
      age: z.number(),
      gender: z.enum(["male", "female", "other"]),
      grade: z.string(),
      courses: z.array(z.string()),
      isInternational: z.boolean(),
      address: addressSchema,
      contactInfo: contactInfoSchema,
    }),
  }),
});

// You can use .parse() to transform and validate an object against the schema
// For example:
// const validStudent = StudentSchema.parse(yourStudentObject);
