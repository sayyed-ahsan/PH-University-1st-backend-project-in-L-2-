import { z } from "zod";

// -------------------------------
// --- use in user.route.ts ------
// -------------------------------

export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: z.string(),
      email: z.string().email(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
