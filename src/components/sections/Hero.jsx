import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

export const Hero = () => {
  const { firstName, title, tagline, resumeUrl } = portfolioData.personalInfo;
  
  // Rotating typing effect content
  const roles = [
    "AI & Full-Stack Developer",
    "Junior Software Intern",
    "Computer Science Student",
    "React & FastAPI Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    if (!isDeleting) {
      if (currentText !== fullText) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (currentText !== '') {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92svh] flex items-center justify-center overflow-hidden py-20 px-6 md:px-12"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full filter blur-[80px] md:blur-[120px] animate-blob pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full filter blur-[70px] md:blur-[110px] animate-blob animation-delay-2000 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-pink-400/10 dark:bg-pink-600/5 rounded-full filter blur-[60px] md:blur-[100px] animate-blob animation-delay-4000 pointer-events-none z-0" />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto text-center z-10 animate-fade-in-up">
        
        {/* Sparkle Intro Tagline */}
        <div className="inline-flex items-center gap-2 bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200/50 dark:border-indigo-800/30 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-spin-slow" />
          <span className="text-xs font-semibold tracking-wide text-indigo-700 dark:text-indigo-300 uppercase">
            Welcome to my portfolio
          </span>
        </div>

        {/* Big Greeting Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
          Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:to-purple-400">{firstName}</span>
        </h1>

        {/* Dynamic Typing Sub-Headline */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300">
            {['A', 'E', 'I', 'O', 'U'].includes(roles[currentRoleIndex]?.charAt(0) || '') ? 'An' : 'A'}{' '}
            <span className="text-indigo-600 dark:text-indigo-400 border-r-2 border-indigo-600 dark:border-indigo-400 animate-pulse pr-0.5">{currentText}</span>
          </p>
        </div>

        {/* Description Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          {tagline}
        </p>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            onClick={() => handleScrollTo('projects')}
            className="group w-full sm:w-auto"
          >
            Explore My Work
          </Button>
          
          <a 
            href={resumeUrl} 
            download="Pratik_Patil_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2
             focus:ring-indigo-500/50 active:scale-95 cursor-pointer border border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600 text-base px-7 py-3.5 gap-2.5"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
};
