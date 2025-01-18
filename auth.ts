import Google from "next-auth/providers/google";
import { googleId, googleSecret } from "./secret";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/db";
import NextAuth from "next-auth";

const authOptions: any = {
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: googleId,
      clientSecret: googleSecret,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth(authOptions);
