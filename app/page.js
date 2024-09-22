"use client";

import './globals.css';
import React from 'react';
import SidescrollerMenu from './component/sidescrollermenu.js';
import ContentBoxSection from './component/contentbox.js';
import ProjectReference from './component/projectreference';
import TextContent1 from './component/textcontent1.js';
import TextContent2 from './component/textcontent2';
import TextContent3 from './component/textcontent3';
import SeparatorBotRight from './component/separatorbotright';
import SeparatorTopLeft from './component/separatortopleft';
import SeparatorTopRight from './component/separatortopright';
import SeparatorBotLeft from './component/separatorbotleft';

export default function HomePage() {
  return (
    <div>
      <SidescrollerMenu />
      <ContentBoxSection />
      <SeparatorTopLeft />
      <ProjectReference />
      <SeparatorBotRight />
      <TextContent1 />
      <SeparatorTopRight />
      <TextContent2 />
      <SeparatorBotLeft />
      <TextContent3 />
    </div>
  );
}