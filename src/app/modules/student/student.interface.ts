export type Student = {
  id: number;
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
