import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { SkillBadge } from '../ui/SkillBadge';
import { portfolioData } from '../../data/portfolioData';
import { User, Code, Database, Settings } from 'lucide-react';

export const About = () => {
  const { bio, location, email } = portfolioData.personalInfo;
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4" />;
      case 1:
        return <Database className="w-4 h-4" />;
      default:
        return <Settings className="w-4 h-4" />;
    }
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white/20 dark:bg-black/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Biography Bio Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card hoverEffect={false} className="p-8">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-200/50 dark:border-slate-800/40 pb-4">
                <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl">
                  <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Who am I?
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {bio}
              </p>

              {/* Personal details quick fields */}
              <div className="flex flex-col gap-3.5 text-sm border-t border-slate-200/50 dark:border-slate-800/40 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-500 font-medium">Location:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-500 font-medium">Email:</span>
                  <a 
                    href={`mailto:${email}`} 
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
                  >
                    {email}
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-500 font-medium">Status:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open to Work
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Interactive Skills Toggles (Right Column) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Card hoverEffect={false} className="p-8">
              
              {/* Category Tab Selector Buttons */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200/50 dark:border-slate-800/40 pb-5">
                {skillCategories.map((category, idx) => (
                  <button
                    key={category.title}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                      activeTab === idx
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/10'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    {getCategoryIcon(idx)}
                    {category.title}
                  </button>
                ))}
              </div>

              {/* Grid of Skill Badges in Active Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories[activeTab].skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    iconName={skill.iconName}
                  />
                ))}
              </div>

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
