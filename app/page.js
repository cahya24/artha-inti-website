"use client";

import './globals.css';
import React from 'react';
import SidescrollerMenu from './component/sidescrollermenu.js';
import ContentBoxSection from './component/contentbox.js';
import ProjectReference from './component/projectreference';
import TextContent1 from './component/textcontent1.js';
import TextContent2 from './component/textcontent2';
import TextContent3 from './component/textcontent3';
import SeparatorTop1 from './component/separatortop1';
import SeparatorBot1 from './component/separatorbot1';
import SeparatorTop2 from './component/separatortop2';
import SeparatorBot2 from './component/separatorbot2';
import SeparatorTop3 from './component/separatortop3';
import TempSeparatorBot1 from './component/tempseparatorbot1';
import TempSeparatorTop1 from './component/tempseparatortop1';
import TempSeparatorBot2 from './component/tempseparatorbot2';
import TempSeparatorTop2 from './component/tempseparatortop2';
import TempSeparatorBot3 from './component/tempseparatorbot3';

export default function HomePage() {
  return (
    <div>
      <SidescrollerMenu />
      <TempSeparatorBot1 />
      <ContentBoxSection />
      <TempSeparatorTop1 />
      <ProjectReference />
      <TempSeparatorBot2 />
      <TextContent1 />
      <TempSeparatorTop2 />
      <TextContent2 />
      <TempSeparatorBot3 />
      <TextContent3 />
    </div>
  );
}