import React from 'react';
import { FaHome } from 'react-icons/fa';

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  title = "لا توجد غرف متاحة", 
  description = "حاليًا لا توجد غرف متاحة للإيجار. يرجى التحقق لاحقًا.",
  icon = <FaHome className="text-4xl mb-3 text-gray-400" />
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-50 rounded-lg">
      <div className="icon-container">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 max-w-md text-center">{description}</p>
    </div>
  );
};

export default EmptyState;