
"use server"

import { auth as nextAuth } from "@/auth";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";

interface DecodedToken {
    userId: string;
    username: string;
  }

export async function getSession() {

  const googleSession = await nextAuth(); 

  const cookieStore = await cookies();
  const customToken = cookieStore.get("token")?.value;

  let commonUser = null;
  if (customToken) {
    try {
      const decoded = jwt.verify(customToken, process.env.JWT_SECRET!) as DecodedToken;
      commonUser = {
        id: decoded?.userId,
        name: decoded?.username,
      };

    } catch (error) {
      console.error("Invalid or expired token:", error);
    }
  }

  return {
    user: googleSession?.user || commonUser,
    id: googleSession?.user?.id || commonUser?.id,
    isLoggedIn: !!(googleSession?.user || commonUser),
    isCommon: !!commonUser,
  };
}