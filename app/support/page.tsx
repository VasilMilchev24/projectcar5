import React from "react";
import Support from "./Support"; 
import Footer from '@/app/components/footer/Footer'; 

const SupportPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Лого в горния ляв ъгъл */}
      <div className="p-4">
        <a href="/">
          <img src="/logo.jpg" alt="FlickFair Logo" className="h-19" />
        </a>
      </div>

      <Support />
      <Footer />
    </div>
  );
};

export default SupportPage;
