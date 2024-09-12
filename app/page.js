"use client";

import './globals.css';
import React from 'react';
import SidescrollerMenu from './component/sidescrollermenu.js';
import ContentBoxSection from './component/contentbox.js';
import ProjectReference from './component/projectreference';
import TextContent1 from './component/textcontent1.js';
import TextContent2 from './component/textcontent2';
import TextContent3 from './component/textcontent3';

export default function HomePage() {
  return (
    <div>
      <SidescrollerMenu />
      <div className='h-36 overflow-hidden bg-primary'>
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none">
          <path fill="#EEF7FF" fill-opacity="1" d="M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,229.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <ContentBoxSection />
      <div className='h-36 overflow-hidden'>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full"><path d="M-49.39,-50.83 C5.92,167.27 402.37,112.98 499.43,64.63 L500.00,150.00 L-1.41,170.22 Z" className="stroke: none; fill: #0057B8;"></path></svg>
      </div>
      <ProjectReference />
      <TextContent1 />
      <TextContent2 />
      <TextContent3 />
    </div>
  );
}