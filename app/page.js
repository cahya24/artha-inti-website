"use client";

import './globals.css';
import React from 'react';
import SidescrollerMenu from './component/sidescrollermenu.js';
import ContentBoxSection from './component/contentbox.js';
import ProjectReference from './component/projectreference';
import TextContent1 from './component/textcontent1.js';
import SupportedBrand from './component/supportedbrand';
import SeparatorBotRight from './component/separatorbotright';
import SeparatorTopLeft from './component/separatortopleft';
import SeparatorTopRight from './component/separatortopright';
import SeparatorBotLeft from './component/separatorbotleft';
import ContactUs from './component/contactus';

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
      <SupportedBrand />
      <SeparatorBotLeft />
      <ContactUs />
    </div>
  );
}