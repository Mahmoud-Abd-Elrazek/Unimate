import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const steps = ['صور المسكن', 'معلومات المسكن', 'خدمات المسكن', 'غرف المسكن'];
const paths = ['/createpost/step1', '/createpost/step2', '/createpost/step3', '/createpost/step4'];

const StepperNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeStep = paths.indexOf(location.pathname);

  return (
    <div className="flex justify-between items-center w-full border-b pb-4 mb-6 px-4 md:px-8 " dir="rtl">
      {steps.map((label, index) => {
        const stepStatus =
          index < activeStep ? 'completed' :
          index === activeStep ? 'active' : 'upcoming';

        let circleColor = '';
        if (stepStatus === 'completed') circleColor = 'bg-green-500 border-green-500';
        else if (stepStatus === 'active') circleColor = 'bg-red-500 border-red-500';
        else circleColor = 'border-[#1D1D1D] dark:border-[white]';

        return (
          <div
            key={index}
            className="flex-1 text-center cursor-pointer relative "
            onClick={() => navigate(paths[index])}
          >
            <div className={`w-5 h-5 mx-auto rounded-full border-2 ${circleColor}`} />
            <div className="mt-2 text-sm font-medium ">{label}</div>
            {index < steps.length - 1 && (
              <div className="absolute top-2.5 right-1/2 w-full h-0.5 bg-gray-200 z-[-1]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepperNav;

