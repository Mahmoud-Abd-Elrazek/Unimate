import React from 'react';
import { FaUsers, FaBuilding, FaChartLine, FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoGitPullRequestSharp } from 'react-icons/io5';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen pt-[100px] px-4 flex flex-col items-center justify-start bg-gray-50 dark:bg-primary_BGD">
            {/* Header */}
            <div className="w-full max-w-7xl mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-primary_TXD">Dashboard</h1>
                <div className="flex items-center gap-4">
                    <Link
                        to="/requests"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
                    >
                        <IoGitPullRequestSharp />
                        Requests
                    </Link>
                    <Link
                        to="/register/owner"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
                    >
                        <FaUsers />
                        Add Owner
                    </Link>
                </div>
            </div>


            {/* Cards */}
            <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" dir="rtl">
                {/* Total Students with details */}
                <Card
                    title="إجمالى الطلاب"
                    value="2"
                    icon={<FaUsers />}
                    details={[
                        { label: 'حجزوا', value: '1' },
                        { label: 'لم يحجزوا بعد ', value: '1' },
                    ]}
                />

                {/* Total Owners */}
                <Card title="إجمالى ملاك العقارات " value="2" icon={<FaUsers />} />

                {/* Apartments */}
                <Card
                    title="إجمالى الشقق"
                    value="2"
                    icon={<FaBuilding />}
                    details={[
                        { label: 'حُجزت', value: '1' },
                        { label: 'لم تُحجز ', value: '1' },
                    ]}
                />

                {/* Number of Requests */}
                <Card
                    title=" إجمالى الطلبات"
                    value="10"
                    icon={<IoGitPullRequestSharp />}
                    details={[
                        { label: 'تم القبول', value: '1' },
                        { label: 'تم الرفض  ', value: '1' },
                        { label: 'لم يتم الرد بعد', value: '1' },
                    ]}
                />

                {/* Total Number of Comments */}
                <Card title="إجمالي عدد التعليقات" value="100" icon={<FaCommentDots />} />

                {/* Average Profits */}
                <Card
                    title="متوسط ​​الأرباح"
                    value="87.69%"
                    icon={<FaChartLine />}
                    subText="جيد"
                    subTextColor="text-green-600"
                />
            </div>
        </div>
    );
};

type CardDetail = {
    label: string;
    value: string;
};

type CardProps = {
    title: string;
    value: string;
    icon: React.ReactNode;
    subText?: string;
    subTextColor?: string;
    details?: CardDetail[];
};

const Card: React.FC<CardProps> = ({
    title,
    value,
    icon,
    subText,
    subTextColor,
    details,
}) => {
    return (
        <div className="dark:bg-secondary_BGD  p-5 rounded-xl shadow flex flex-col justify-between" dir="rtl">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500 dark:text-secondary_TXD">{title}</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-secondary_TXD">{value}</p>
                    {subText && (
                        <p className={`text-sm ${subTextColor ?? 'text-gray-500'}`}>{subText}</p>
                    )}
                </div>
                <div className="text-2xl text-gray-400 dark:text-primary_TXD">{icon}</div>
            </div>

            {details && (
                <div className="mt-4 space-y-1">
                    {details.map((detail, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between text-sm text-gray-600 dark:text-secondary_TXD"
                        >
                            <span>{detail.label}</span>
                            <span>{detail.value}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
