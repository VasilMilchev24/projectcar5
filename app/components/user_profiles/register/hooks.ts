
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function useRegister() {

    const [loading, setLoading] = useState(false);
    const [error, setError]     = useState<string | null>(null);

    const router = useRouter();
  
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();
      setLoading(true);
      setError(null);
  
      const formData    = new FormData(e.currentTarget);
      const username    = formData.get("username");
      const email       = formData.get("email");
      const password    = formData.get("password");
  
      try {
        const res = await fetch("/api/register-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        });
  
        if (res.ok) {
          router.push("/main_page");
        } else {
          const errorData = await res.json();
          setError(errorData.error || "Registration failed");
        }
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    async function handleGoogleSignUp() {
        await signIn('google', { callbackUrl: "/main_page" });
    }
  
    return { handleRegister, handleGoogleSignUp, loading, error };
}