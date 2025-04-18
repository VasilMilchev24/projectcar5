import React from "react";
import SearchBar from "../components/SearchBar";
import SideScrollBar from "../components/SideScrollBar";


const Home:React.FC =()=> {
  return (
    <main className="bg-gray-900 min-h-screen">
      <div className="pt-16 bg-gray-900"> {/* Added padding for navbar */}
        <SearchBar />
        <SideScrollBar />        
      </div>
    </main>
  )
};

export default Home;