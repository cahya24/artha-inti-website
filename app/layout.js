"use client";

import './globals.css';
import Navbar from './component/navbar.js';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <Navbar />
        
        {children}
        {/* Footer */}
        <footer className="p-6 bg-primary text-white text-center font-bold">
          <p>&copy; 2024 PT Artha Inti Manunggal. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
