import Navbar from '@/app/components/Navbar';
import SearchBar from "../components/SearchBar";
import SideScrollBar from "../components/SideScrollBar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans bg-neutral-800 min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Added padding for navbar */}
        <SearchBar />
        <SideScrollBar />
        {/* Main content */}
        {children}
      </div>
    </main>
  )
}