import React, { useState } from 'react';
import { Terminal, Server, Globe, Search } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-mauve" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-green" />;
      default:
        return <Terminal className="w-5 h-5 text-subtext0" />;
    }
  };

  const filteredGroups = SKILL_GROUPS.map((group) => {
    const matchesGroup = selectedGroup === 'All' || group.name === selectedGroup;
    if (!matchesGroup) return null;

    const filteredItems = group.items.filter((item) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        (item.note && item.note.toLowerCase().includes(q))
      );
    });

    if (filteredItems.length === 0) return null;

    return {
      ...group,
      items: filteredItems,
    };
  }).filter(Boolean);

  return (
    <div className="space-y-6">
      
      {/* Search & Filter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-mantle p-1 rounded-lg border border-surface1 font-mono text-xs">
          <button
            onClick={() => setSelectedGroup('All')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              selectedGroup === 'All'
                ? 'bg-blue text-base font-semibold shadow-glow-blue'
                : 'text-subtext0 hover:text-text'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_GROUPS.map((group) => (
            <button
              key={group.name}
              onClick={() => setSelectedGroup(group.name)}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedGroup === group.name
                  ? 'bg-blue text-base font-semibold shadow-glow-blue'
                  : 'text-subtext0 hover:text-text'
              }`}
            >
              {group.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Live Filter Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-subtext0 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter tooling (e.g. K3s, Python)..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-surface1 bg-mantle text-xs font-mono text-text placeholder-subtext0 focus:outline-none focus:border-blue transition-colors"
          />
        </div>

      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredGroups.map((group) => {
          if (!group) return null;
          return (
            <div
              key={group.name}
              className="rounded-xl border border-surface1 bg-mantle/70 p-6 flex flex-col justify-between shadow-subtle-card hover:border-surface2 transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-surface0 border border-surface1">
                    {getIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text">
                      {group.name}
                    </h3>
                    <span className="text-[11px] font-mono text-subtext0">
                      {group.items.length} tools verified
                    </span>
                  </div>
                </div>

                <p className="text-xs text-subtext0 mt-2 mb-4 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Pills */}
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-center justify-between p-2 rounded border transition-colors ${
                        item.highlight
                          ? 'border-blue/30 bg-surface0/70'
                          : 'border-surface1 bg-surface0/30'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.highlight ? 'bg-blue shadow-glow-blue' : 'bg-surface2'
                          }`}
                        />
                        <span className="font-mono text-xs font-medium text-text">
                          {item.name}
                        </span>
                      </div>
                      {item.note && (
                        <span className="font-mono text-[10px] text-subtext0">
                          {item.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

