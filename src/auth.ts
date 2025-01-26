import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";
import Nodemailer from "@auth/core/providers/nodemailer";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "auth_users",
  }),
  providers: [
    Nodemailer({
      server: {
        host: process.env.AUTH_HOST,
        port: process.env.AUTH_PORT,
        secure: process.env.AUTH_SECURE,
        auth: {
          user: process.env.AUTH_USER,
          pass: process.env.AUTH_PASS,
        },
      },
      from: process.env.AUTH_USER,
    }),
  ],
});
