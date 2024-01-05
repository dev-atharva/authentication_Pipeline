import bcryptjs from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }
          const passwordsmatch = await bcryptjs.compare(
            password,
            user.password
          );
          if (passwordsmatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
