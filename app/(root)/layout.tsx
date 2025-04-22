import Navbar from '@/app/components/navbar/Navbar';
import { SessionProvider } from "@/app/lib/session/SessionContext";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <main className="font-work-sans bg-neutral-800 min-h-screen">
        <Navbar />
        {children}
      </main>
    </SessionProvider>
  )
}