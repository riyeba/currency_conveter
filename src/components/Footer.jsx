import React from "react";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 fixed bottom-0 w-full shadow-md">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-2">
          <Link to="https://web.facebook.com/profile.php?id=100079060510768" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook text-white text-2xl"></i>
          </Link>
          <Link to="https://x.com/UnionKsu96946" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter-x text-white text-2xl font-bold"></i>
          </Link>
          <Link to="https://t.me/+rLdyoOB36BExYjRk" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-telegram text-white text-2xl"></i>
          </Link>
        </div>
        <p className="text-sm">&copy; 2024 NSU-KSU EXCOS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
