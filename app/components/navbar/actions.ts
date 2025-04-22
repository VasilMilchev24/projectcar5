"use server"

import { cookies } from "next/headers";

export async function ourSignOut() {
    const cookieStore = await cookies();
    cookieStore.set("token", "", { maxAge: -1 });
}
