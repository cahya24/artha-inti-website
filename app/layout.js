import './globals.css';
import Navbar from './component/navbar.js';
import SidescrollerMenu from './component/sidescrollermenu.js';
import ContentBoxSection from './component/contentbox.js';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SidescrollerMenu />
        <ContentBoxSection />
        <main className="container mx-auto">{children}</main>
        <footer className="p-6 bg-gray-800 text-white text-center">
          <p>&copy; 2024 Artha Inti. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
