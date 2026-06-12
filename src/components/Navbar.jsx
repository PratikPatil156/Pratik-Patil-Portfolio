import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  // Track window scroll behaviors
  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar shrink effect
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Scroll progress indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 3. Active section tracking based on viewport
      const scrollPosition = window.scrollY + 120; // offset navbar height
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticking navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 shadow-lg shadow-slate-200/10 dark:shadow-slate-900/10 glass-navbar' 
        : 'py-5 bg-transparent border-b border-transparent'
    }`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-2xl font-extrabold tracking-tight select-none hover:opacity-90 transition-opacity"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            {portfolioData.personalInfo.firstName}
          </span>
          <span className="text-slate-800 font-medium">
            .{portfolioData.personalInfo.lastName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-900/40 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/40">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <Button size="sm">
                Hire Me
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex items-center gap-3 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full w-9 h-9 p-0 text-slate-600 dark:text-slate-300"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Glass Drawer Panel */}
      <div className={`md:hidden fixed inset-0 top-[60px] w-full bg-slate-50/90 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200/50 dark:border-slate-800/50 z-40 transition-all duration-300 flex flex-col p-6 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-4 mt-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-lg font-medium px-4 py-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between ${
                activeSection === link.id
                  ? 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/60'
              }`}
            >
              {link.label}
              <span className={`w-2 h-2 rounded-full bg-indigo-500 transition-opacity duration-300 ${
                activeSection === link.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </a>
          ))}
        </div>

        <div className="mt-auto mb-12">
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="block w-full text-center"
          >
            <Button className="w-full py-4 rounded-2xl text-base shadow-lg shadow-indigo-500/20">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
