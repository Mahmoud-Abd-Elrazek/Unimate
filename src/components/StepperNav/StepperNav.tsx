import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const steps = ['صور المسكن', 'معلومات المسكن', 'خدمات المسكن', 'غرف المسكن'];
steps.reverse();
const paths = ['/createpost/step1', '/createpost/step2', '/createpost/step3', '/createpost/step4'];

const StepperNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeStep = paths.indexOf(location.pathname);

  return (

    <Box sx={{ width: '100%', direction: 'rtl' }}>

      <Stepper activeStep={activeStep}
        sx={{
          '& .MuiStepIcon-root': {
            color: 'gray', // default (future steps)
          },
          '& .Mui-completed .MuiStepIcon-root': {
            color: 'red', // completed
          },
          '& .Mui-active .MuiStepIcon-root': {
            color: 'red', // active
          }
        }}
      >
        {[...steps].reverse().map((label, index) => {
          const stepIndex = steps.length - 1 - index; // reverse index
          return (
            <Step key={label} onClick={() => navigate(paths[stepIndex])} className=''>
              <StepLabel className='text-2xl '><div className='m-3 font-semibold text-2xl'>{label}</div></StepLabel>
            </Step>
          );
        })}
      </Stepper>

    </Box>
  );
};

export default StepperNav;
