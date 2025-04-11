import Navbar from '@/app/components/Navbar';
import SearchBar from "../components/SearchBar";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
   <main className="font-work-sans  bg-neutral-800">
    <Navbar />
    <SearchBar/>
    {children}
   </main>
  )
}