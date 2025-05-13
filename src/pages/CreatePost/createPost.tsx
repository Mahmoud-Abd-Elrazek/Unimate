import React from 'react';
import { Outlet } from 'react-router-dom';
import StepperNav from '../../components/StepperNav/StepperNav';
import { Box } from '@mui/material';
import { PiStudentFill } from 'react-icons/pi';

const CreatePost: React.FC = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16" dir="rtl">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center flex justify-center items-center gap-2 flex-wrap mb-6">
        استديو اصحاب العقارات
        <span>
          <PiStudentFill className="w-8 h-8 sm:w-10 sm:h-10 MainColorText" />
        </span>
      </h1>

      <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <div className="mx-2 sm:mx-6 md:mx-12 lg:mx-24">
          <StepperNav />
        </div>
        <Outlet />
      </Box>
    </div>
  );
};

export default CreatePost;
