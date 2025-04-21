// pages/create-post/CreatePost.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import StepperNav from '../../components/StepperNav/StepperNav';
import { Box } from '@mui/material';
import { PiStudentFill } from 'react-icons/pi';

const CreatePost: React.FC = () => {
  return (
    <div className=' min-h-screen mt-1 mr-3' dir='rtl'> 
      <h1 className='text-3xl font-semibold text-right flex'>استديو اصحاب العقارات <span><PiStudentFill className='w-10 h-10 MainColorText'/></span></h1>
    <Box sx={{ p: 4 }} className="">
      <div className='mx-24 '>
      <StepperNav />
      </div>
      <Outlet />
    </Box>
    </div>
  );
};

export default CreatePost;
