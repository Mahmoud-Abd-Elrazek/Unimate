// src/pages/Dashboard.tsx
import React from 'react';
import { FaUsers, FaBuilding, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen pt-[100px] px-4 flex flex-col items-center justify-start bg-gray-50 dark:bg-primary_BGD ">
      {/* Header */}
      <div className="w-full max-w-7xl mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-primary_TXD">Dashboard</h1>
        <Link to='/register/owner' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <FaUsers />
          Add Owner
        </Link>
      </div>

      {/* Cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Total Students */}
        <Card title="Total Students" value="2" icon={<FaUsers />} />
        {/* Total Owners */}
        <Card title="Total Owners" value="2" icon={<FaUsers />} />
        {/* Apartments */}
        <Card title="Total Apartments" value="1" icon={<FaBuilding />} />
        {/* Total Students Duplicate */}
        <Card title="Total Students already Booked" value="2" icon={<FaUsers />} />
        {/* Average GPA */}
        <Card
          title="Average Profits"
          value="87.69%"
          icon={<FaChartLine />}
          subText="Good"
          subTextColor="text-green-600"
        />
      </div>
    </div>
  );
};

type CardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  subText?: string;
  subTextColor?: string;
};

const Card: React.FC<CardProps> = ({ title, value, icon, subText, subTextColor }) => {
  return (
    <div className="dark:bg-secondary_BGD  p-5 rounded-xl shadow flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-secondary_TXD">{title}</p>
        <p className="text-2xl font-semibold text-gray-900 dark:text-secondary_TXD">{value}</p>
        {subText && (
          <p className={`text-sm ${subTextColor ?? 'text-gray-500'}`}>{subText}</p>
        )}
      </div>
      <div className="text-2xl text-gray-400 dark:text-gray-300">{icon}</div>
    </div>
  );
};

export default Dashboard;
