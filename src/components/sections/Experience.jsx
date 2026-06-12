import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Experience = () => {
  const { experience, education, certificates } = portfolioData;
  const [activeTimeline, setActiveTimeline] = useState('work');

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white/20 dark:bg-black/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            My Journey
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400">
            A chronological timeline of my professional accomplishments, academic background, and official certifications.
          </p>
        </div>

        {/* Timeline Selector Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          <button
            onClick={() => setActiveTimeline('work')}
            className={`flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
              activeTimeline === 'work'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/10'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Work Experience
          </button>
          
          <button
            onClick={() => setActiveTimeline('education')}
            className={`flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
              activeTimeline === 'education'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/10'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Academic Timeline
          </button>

          <button
            onClick={() => setActiveTimeline('certificates')}
            className={`flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
              activeTimeline === 'certificates'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/10'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <Award className="w-4 h-4" />
            Certifications
          </button>
        </div>

        {/* Timeline Path and Items Grid */}
        <div className="relative border-l-2 border-indigo-300/80 dark:border-slate-800/60 max-w-4xl mx-auto pl-6 md:pl-10 flex flex-col gap-10">
          
          {activeTimeline === 'work' && (
            experience.map((item) => (
              <div key={item.id} className="relative animate-fade-in-up">
                
                {/* Dotted Marker Pulse */}
                <span className="absolute -left-[31px] md:-left-[47px] top-6 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 ring-4 ring-white dark:ring-slate-950 flex items-center justify-center shadow">
                  <span className="absolute w-2 h-2 rounded-full bg-white dark:bg-slate-950 animate-ping" />
                </span>

                {/* Card Container */}
                <Card className="p-6 md:p-8">
                  {/* Timeline Header Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-5 border-b border-slate-200/50 dark:border-slate-800/40 pb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">
                        {item.role}
                      </h3>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {item.company}
                      </span>
                    </div>

                    <div className="flex flex-col md:items-end gap-1 text-slate-500 dark:text-slate-400 text-xs">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements Detail Bullets */}
                  <ul className="flex flex-col gap-2.5 list-disc list-inside text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-1.5">
                    {item.description.map((bullet, idx) => (
                      <li key={idx} className="marker:text-indigo-500">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                </Card>

              </div>
            ))
          )}

          {activeTimeline === 'education' && (
            education.map((item) => (
              <div key={item.id} className="relative animate-fade-in-up">
                
                {/* Dotted Marker Pulse */}
                <span className="absolute -left-[31px] md:-left-[47px] top-6 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 ring-4 ring-white dark:ring-slate-950 flex items-center justify-center shadow">
                  <span className="absolute w-2 h-2 rounded-full bg-white dark:bg-slate-950 animate-ping" />
                </span>

                {/* Card Container */}
                <Card className="p-6 md:p-8">
                  {/* Timeline Header Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-5 border-b border-slate-200/50 dark:border-slate-800/40 pb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">
                        {item.role}
                      </h3>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {item.company}
                      </span>
                    </div>

                    <div className="flex flex-col md:items-end gap-1 text-slate-500 dark:text-slate-400 text-xs">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements Detail Bullets */}
                  <ul className="flex flex-col gap-2.5 list-disc list-inside text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-1.5">
                    {item.description.map((bullet, idx) => (
                      <li key={idx} className="marker:text-indigo-500">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                </Card>

              </div>
            ))
          )}

          {activeTimeline === 'certificates' && (
            certificates.map((item) => (
              <div key={item.id} className="relative animate-fade-in-up">
                
                {/* Dotted Marker Pulse */}
                <span className="absolute -left-[31px] md:-left-[47px] top-6 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 ring-4 ring-white dark:ring-slate-950 flex items-center justify-center shadow">
                  <span className="absolute w-2 h-2 rounded-full bg-white dark:bg-slate-950 animate-ping" />
                </span>

                {/* Card Container */}
                <Card className="p-6 md:p-8">
                  {/* Timeline Header Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-4 border-b border-slate-200/50 dark:border-slate-800/40 pb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">
                        {item.title}
                      </h3>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {item.issuer}
                      </span>
                    </div>

                    <div className="flex flex-col md:items-end gap-1 text-slate-500 dark:text-slate-400 text-xs">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                        Certificate of Completion
                      </span>
                    </div>
                  </div>

                  {/* Certificate description text */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                </Card>

              </div>
            ))
          )}

        </div>

      </div>
    </section>
  );
};
