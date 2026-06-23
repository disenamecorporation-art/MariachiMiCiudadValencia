/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import CallToAction from './components/CallToAction';
import Highlights from './components/Highlights';
import Features from './components/Features';
import VideoGrid from './components/VideoGrid';
import TeamMosaic from './components/TeamMosaic';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#01050a] min-h-screen text-white font-sans selection:bg-[#d0aa5b] selection:text-black">
      <Navbar />
      <Hero onOpenContact={() => setIsModalOpen(true)} />
      <Highlights />
      <About />
      <Showcase />
      <CallToAction onOpenContact={() => setIsModalOpen(true)} />
      <Features />
      <section className="bg-[#050505] border-y border-white/5">
        <VideoGrid />
      </section>
      <TeamMosaic />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
