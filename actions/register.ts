"use server";
import { RegisterSchema } from "@/schemas";
import bcryptjs from "bcryptjs";
import * as z from "zod";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password, name } = validatedFields.data;
  const hashedpassword = await bcryptjs.hash(password, 10);
  const existign_user = await getUserByEmail(email);
  if (existign_user) {
    return { error: "Email is already in use" };
  }
  await db.user.create({
    data: {
      name: name,
      email: email,
      password: hashedpassword,
    },
  });
  // todo send verification token email
  return { success: "User created" };
};
