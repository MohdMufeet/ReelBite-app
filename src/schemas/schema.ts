import { z } from "zod";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(12),
});
const registerSchema = z.object({
  name: z.string().min(2).max(12),
  email: z.email(),
  password: z.string().min(6).max(12),
});

const partnerLoginSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(12),
});

const partnerRegisterSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Business name must be at least 2 characters long" })
    .max(50, { message: "Business name cannot exceed 50 characters" }),

  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username cannot exceed 20 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Only letters, numbers, and underscores are allowed",
    }),

  contactName: z
    .string()
    .min(2, { message: "Contact name must be at least 2 characters long" })
    .max(30, { message: "Contact name cannot exceed 30 characters" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(12, { message: "Phone number cannot exceed 12 digits" }),

  address: z
    .string()
    .min(5, { message: "Please provide a valid full address" })
    .max(200, { message: "Address is too long" }),

  email: z.string().email({ message: "Invalid email address format" }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password cannot exceed 20 characters" }),

  description: z
    .string()
    .min(10, { message: "Description should be at least 10 characters long" })
    .max(500, { message: "Description cannot exceed 500 characters" }),
});

const reelSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().min(12).max(1000),
  price: z.string().optional(),
  file: z.any().optional(),
  likes:z.number()
});


export {
  loginSchema,
  registerSchema,
  partnerLoginSchema,
  partnerRegisterSchema,
  reelSchema,
};
