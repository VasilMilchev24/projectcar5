import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {auth, signOut,signIn} from '@/auth';



const Navbar = async() => {
    const session = await auth ();
  return (
    <header className="px-5 py-3  bg-neutral-800shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
        <Link href="/">
            <Image src="/logo.jpg" alt="project-car-logo" width={76} height={15} />
        </Link>

        <div className="flex items-center gap-10 text-black font-semibold">
            {session && session?.user?(
                <>
                    <Link href="/projectcar/upload" 
                    className=" text-white px-4 py-2 hover:text-primary transition-colors">
                        <span>Create</span>
                    </Link>

                    <form action={async()=>{
                        "use server";
                        
                        await signOut({redirectTo:"/"});
                    }}>
                    <button type="submit"
                    className=" text-white px-4 py-2 hover:text-primary transition-colors">
                        <span>Sign Out</span>
                    </button>
                    </form>

                    <Link href={`/user/${session?.id}`}
                     className=" text-white px-4 py-2 hover:text-primary transition-colors">
                        <span>{session?.user?.name}</span>
                    </Link>

                   
                </>
            ):(
                <form action={async()=>{
                "use server";

                await signIn('google')}}>
                  
                    <button type="submit"
                     className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                     >
                        Login
                    </button>
                </form>
            )
         }
        </div>
        </nav>
    </header>
  )
}

export default Navbar