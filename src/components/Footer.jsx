import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from './ui/CustomIcons';

export const Footer = () => {
  const { socials, fullName, email } = portfolioData.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'github':
        return <GithubIcon className="w-5 h-5" />;
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'twitter':
        return <TwitterIcon className="w-5 h-5" />;
      case 'whatsapp':
        return <WhatsappIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-900/60 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            {fullName}
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} All rights reserved. Crafted with React & Tailwind.
          </p>
        </div>

        {/* Social Navigation Links */}
        <div className="flex items-center gap-4">
          {Object.entries(socials).map(([platform, url]) => {
            if (!url) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-200/50 hover:bg-indigo-50 dark:bg-slate-900 dark:hover:bg-indigo-950/40 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-slate-300/20 dark:border-slate-800/30"
                aria-label={`Visit my ${platform}`}
              >
                {getSocialIcon(platform)}
              </a>
            );
          })}
          
          <a
            href={`mailto:${email}`}
            className="w-10 h-10 rounded-xl bg-slate-200/50 hover:bg-indigo-50 dark:bg-slate-900 dark:hover:bg-indigo-950/40 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-slate-300/20 dark:border-slate-800/30"
            aria-label="Send email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Back to Top */}
        <Button
          variant="outline"
          size="sm"
          onClick={scrollToTop}
          className="rounded-xl w-10 h-10 p-0 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>

      </div>
    </footer>
  );
};
