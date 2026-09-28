import { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  label: string;
  code: string;
  language?: string;
}

interface CodeTabsProps {
  tabs: Tab[];
}

export default function CodeTabs({ tabs }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const activeTabContent = tabs[activeTab];

  return (
    <div className="my-6 rounded-lg border border-white/10 bg-slate-900/60 overflow-hidden">
      <div className="flex gap-0 border-b border-white/10 bg-slate-950/50">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 text-sm font-medium transition relative ${
              idx === activeTab
                ? 'text-cyan-300 bg-slate-900/40'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            {tab.label}
            {idx === activeTab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="p-4"
      >
        <pre className="font-mono text-sm text-slate-200 overflow-x-auto">
          <code>{activeTabContent.code}</code>
        </pre>
      </motion.div>
    </div>
  );
}
