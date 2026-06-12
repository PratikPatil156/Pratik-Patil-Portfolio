import React, { useState, useRef } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from '../ui/CustomIcons';

export const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  const scrollerRef = useRef(null);

  const filterCategories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Full-Stack', value: 'fullstack' }
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const scroll = (direction) => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const cardWidth = 380;
      const gap = 32;
      const scrollAmount = cardWidth + gap;
      scroller.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-500 dark:text-slate-400">
            A curated showcase of applications I built, combining high-fidelity layout styling with powerful modern engineering.
          </p>
        </div>

        {/* Filter Categories Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`text-xs font-semibold px-4.5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                filter === cat.value
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/10'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Carousel Wrapper with Hover Navigation */}
        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hidden md:flex cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dynamic Project Scroller */}
          <div 
            ref={scrollerRef}
            className="flex overflow-x-auto gap-8 pb-6 snap-x snap-mandatory scroll-smooth custom-horizontal-scrollbar"
          >
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="w-[88vw] sm:w-[380px] flex-shrink-0 snap-start flex flex-col"
            >
              <Card className="group flex flex-col h-full overflow-hidden p-0 rounded-2xl">
                {/* Image Container with Hover Zoom */}
                <div className="relative overflow-hidden aspect-video w-full border-b border-slate-200 dark:border-slate-800/40">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Overlay Tag */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase bg-indigo-600/90 text-white px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Card Meta Content Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors h-[56px] line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills List */}
                  <div className="flex flex-wrap gap-1.5 mb-6 h-[52px] overflow-y-auto hide-scrollbar">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link Shortcut Anchors */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/40">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          leftIcon={<GithubIcon className="w-4 h-4" />}
                          className="w-full text-xs font-semibold rounded-xl"
                        >
                          Code
                        </Button>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow"
                      >
                        <Button
                          size="sm"
                          leftIcon={<ExternalLink className="w-4 h-4" />}
                          className="w-full text-xs font-semibold rounded-xl"
                        >
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hidden md:flex cursor-pointer"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      </div>
    </section>
  );
};
