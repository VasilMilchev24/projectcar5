
"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useOurSignOut } from "./hooks";
import { useSession } from "@/app/lib/session/SessionContext";

const Navbar = () => {

  const { session, loading } = useSession();
  const { handleSignOut } = useOurSignOut();

  if (loading) return null;

  return (
    <header className="px-5 py-3 bg-gray-900 shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
        <Link href="/">
            <Image src="/logo.jpg" alt="project-car-logo" width={76} height={15} />
        </Link>

        <div className="flex items-center gap-10 text-black font-semibold">
            {session && session?.user?(
                <>

                    <button
                        onClick={handleSignOut}
                        className="text-white px-4 py-2 hover:text-primary transition-colors"
                        >
                        Sign Out
                    </button>

                    <Link href={`/user/${session?.id}`}
                     className=" text-white px-4 py-2 hover:text-primary transition-colors">
                        <span>{session?.user?.name}</span>
                    </Link>

                   
                </>
            ):(
                <Link 
                href="/login"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
                Login
            </Link>
            )
         }
        </div>
        </nav>
    </header>
  )
}

export default Navbar