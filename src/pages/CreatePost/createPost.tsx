// pages/create-post/CreatePost.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import StepperNav from '../../components/StepperNav/StepperNav';
import { Box } from '@mui/material';
import { PiStudentFill } from 'react-icons/pi';

const CreatePost: React.FC = () => {
  return (
    <div className=' min-h-screen px-10' dir='rtl'> 
      <h1 className='text-3xl font-semibold text-center flex mr-5 justify-center items-center'>استديو اصحاب العقارات <span><PiStudentFill className='w-10 h-10 MainColorText'/></span></h1>
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
