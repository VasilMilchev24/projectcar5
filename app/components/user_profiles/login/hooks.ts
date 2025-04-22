
"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSession } from '@/app/lib/session/actions';
import { useSession } from "@/app/lib/session/SessionContext";

export function useLogin() {

    const { setSession } = useSession();
    const router = useRouter();

    const [loading, setLoading]    = useState(false);
    const [error, setError]        = useState<string | null>(null);

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();
        setLoading(true);

        const formData  = new FormData(e.target as HTMLFormElement);
        const email     = formData.get("email");
        const password  = formData.get("password");

        try {
            
            const res = await fetch("/api/authenticate-user", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });
        
            if (!res.ok) {
                const errorData = await res.json();
                setError(errorData?.error || "Invalid email or password");
                return;
            }
        
            const sessionData = await getSession();
            setSession(sessionData);
            router.push("/main_page");

        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    async function handleGoogleLogin() {
        await signIn('google', { callbackUrl: "/main_page" });
    }

    return { handleLogin, handleGoogleLogin, loading, error };
}