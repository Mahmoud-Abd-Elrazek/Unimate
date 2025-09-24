import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ 
  tabs, 
  activeTab, 
  onChange 
}) => {
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`px-4 py-2 font-medium text-sm rounded-t-lg -mb-px transition-colors ${
            activeTab === tab.id
              ? 'border-b-2 border-blue-500 text-blue-600 bg-white'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};