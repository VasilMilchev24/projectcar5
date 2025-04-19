import Navbar from '@/app/components/Navbar';


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans bg-neutral-800 min-h-screen">
      <Navbar />
      {children}
    </main>
  )
}