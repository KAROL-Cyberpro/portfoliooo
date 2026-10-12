import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Contact Section at the bottom */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
