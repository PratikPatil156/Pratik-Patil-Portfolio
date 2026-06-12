import React from 'react';
import * as Icons from 'lucide-react';

export const SkillBadge = ({ name, level, iconName }) => {
  // Safe dynamic icon loader helper
  const getIcon = (name) => {
    // Basic mapping for specific tech names to standard Lucide icons
    const map = {
      React: 'Atom',
      FileCode: 'FileCode',
      Palette: 'Palette',
      Layers: 'Layers',
      Cpu: 'Cpu',
      Server: 'Server',
      Network: 'GitCommit',
      Database: 'Database',
      Zap: 'Zap',
      Box: 'Box',
      Cloud: 'Cloud',
      GitBranch: 'GitBranch',
      Figma: 'Framer',
      OpenCV: 'Eye',
      MySQL: 'Database',
      PostgreSQL: 'Database',
      Matplotlib: 'TrendingUp',
      Seaborn: 'BarChart3'
    };

    const iconKey = map[name] || iconName;
    const IconComponent = Icons[iconKey] || Icons.Code;
    return <IconComponent className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
  };

  return (
    <div className="glass-card rounded-xl border border-slate-200/50 dark:border-slate-800/40 hover:shadow-md hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 p-3">
      <div className="flex items-center gap-2.5">
        <div className="p-2 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg">
          {getIcon(name)}
        </div>
        <span className="font-medium text-sm text-slate-700 dark:text-slate-200">{name}</span>
      </div>
    </div>
  );
};
