import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div>
        <p>© 2025 FlickFair.</p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col space-y-2 text-left">
          <a href="/support" className="text-white hover:underline">Audio Description</a>
          <a href="/support" className="text-white hover:underline">Terms of Use</a>
          <a href="/support" className="text-white hover:underline">Service</a>
        </div>
        <div className="flex flex-col space-y-2 text-center">
          <a href="/support" className="text-white hover:underline">Help Center</a>
          <a href="/support" className="text-white hover:underline">Jobs</a>
          <a href="/support" className="text-white hover:underline">Cookie Preferences</a>
        </div>
        <div className="flex flex-col space-y-2 text-right">
          <a href="/support" className="text-white hover:underline">Media Center</a>
          <a href="/support" className="text-white hover:underline">Privacy</a>
          <a href="/support" className="text-white hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;;