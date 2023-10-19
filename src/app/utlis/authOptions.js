import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../lib/mongoPromise";
import { connectToDatabase } from "../lib/mongodb";
export const authOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  theme: {
    colorScheme: "light",
    brandColor: "#1A4693",
    logo: "https://psserviceimages.s3.us-east-2.amazonaws.com/PS-LOGOS/PSLOGO-LOGIN.png",
    buttonText: "#fff",
  },
  callbacks: {
    async signIn({ user }) {
      const { db } = await connectToDatabase();
      const existe = await db
        .collection("users")
        .findOne({ email: user?.email });

      if (existe) {
        return true;
      } else {
        return false;
      }
    },
    async session({ session, user, token }) {
      const { db } = await connectToDatabase();
      const userInfo = await db
        .collection("users")
        .findOne({ email: user?.email });
      if (userInfo) {
        session.roles = userInfo.profile.roles;
        session.user.id = userInfo._id;
        session.user.name = `${userInfo.profile.name} ${userInfo.profile.lastName}`;
        session.user.photo = userInfo.profile.picture;
        return session;
      }
      return {};
    },
  },
};
