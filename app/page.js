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
      <ContentBoxSection />
      <ProjectReference />
      <TextContent1 />
      <TextContent2 />
      <TextContent3 />
    </div>
  );
}