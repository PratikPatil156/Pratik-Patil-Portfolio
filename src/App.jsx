import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-black dark:text-slate-100 transition-colors duration-300">
      {/* Navigation bar */}
      <Navbar />

      {/* Portfolio sections layout wrapper */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero />

        {/* About Section (Bio & Skills) */}
        <About />

        {/* Projects Section (Filterable Showcase) */}
        <Projects />

        {/* Timeline Section (Experience & Education) */}
        <Experience />

        {/* Contact Section (Interactive Form) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
