// auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export const config = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Force all successful logins to main_page
      const allowedPaths = ["/main_page", "/error"];
      const isAllowed = allowedPaths.some(path => url.includes(path));
      
      return isAllowed ? url : `${baseUrl}/main_page`;
    },
    async session({ session, token }) {
      if (token.sub) session.user.id = token.sub;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);