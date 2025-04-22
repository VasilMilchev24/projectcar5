
"use client"

import { signOut } from "next-auth/react";
import { useSession } from "@/app/lib/session/SessionContext";
import { ourSignOut } from "./actions"
import { useRouter } from "next/navigation";

export const useOurSignOut = () => {

  const { session, setSession } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    if (session?.isCommon) {
      await ourSignOut();
      setSession(null);
      router.push("/");
    } else {
      await signOut({ redirectTo: "/" }); 
    }
  };

  return { handleSignOut };
};