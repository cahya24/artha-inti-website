import './globals.css';
import Navbar from './component/navbar.js';
import SidescrollerMenu from './component/sidescrollermenu.js';
import ContentBoxSection from './component/contentbox.js';
import ProjectReference from './component/projectreference';
import TextContent1 from './component/textcontent1.js';
import TextContent2 from './component/textcontent2';
import TextContent3 from './component/textcontent3';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SidescrollerMenu />
        <ContentBoxSection />
        <ProjectReference />
        <TextContent1 />
        <TextContent2 />
        <TextContent3 />
        <main className="container mx-auto">{children}</main>
        <footer className="p-6 bg-gray-800 text-white text-center">
          <p>&copy; 2024 PT Artha Inti Manunggal. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
