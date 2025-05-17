import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { IoIosSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

const FilterBar: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([400, 800]);
  const [showModal, setShowModal] = useState(false);

  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setPriceRange([value[0], value[1]]);
    }
  };

  return (
    <>
      {/* زر الفلتر للأجهزة الصغيرة فقط */}
      <div className="md:hidden w-full flex justify-end pr-4 mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md"
        >
          <FaFilter className="text-lg" />
        </button>
      </div>


      {/* الفلاتر للشاشات الكبيرة */}
      <div className="hidden md:flex w-full rounded-xl p-4 shadow-sm flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-3 dark:bg-[#1F1F1F]">
        {/* أيقونة البحث */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <div className="rounded-full w-10 h-10 bg-red-500 flex items-center justify-center">
            <IoIosSearch className="text-white text-xl" />
          </div>
        </div>

        {/* السعر */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row sm:items-center gap-2 text-right relative">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:static absolute right-0 top-0">السعر</span>

          <div className="relative w-full sm:w-64 ">
            <Slider
              range
              min={0}
              max={5000}
              step={50}
              value={priceRange}
              onChange={handlePriceChange}
              allowCross={false}
              trackStyle={[{ backgroundColor: '#DC3545', height: 8 }]}
              handleStyle={[
                {
                  borderWidth: 4,
                  backgroundColor: '#DC2626',
                  width: 20,
                  height: 20,
                  marginTop: -5,
                },
                {
                  borderWidth: 4,
                  backgroundColor: '#DC2626',
                  width: 20,
                  height: 20,
                  marginTop: -5,
                },
              ]}
              railStyle={{ backgroundColor: '#FECACA', height: 8 }}
            />
          </div>

          <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-200 whitespace-nowrap">
            {priceRange[0]} ج.م - {priceRange[1]} ج.م
          </span>
        </div>

        {/* فلاتر دروب داون */}
        <div className="w-full md:w-auto flex flex-wrap justify-between gap-2">
          {["عدد الأفراد", "عدد الغرف", "النوع", "المنطقة"].map((label, index) => (
            <Dropdown key={index}>
              <Dropdown.Toggle
                variant="light"
                className="text-black dark:text-white border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-md text-sm shadow-sm"
                id={`dropdown-${index}`}
              >
                {label}
              </Dropdown.Toggle>
              <Dropdown.Menu className="text-right w-40">
                <Dropdown.Item href="#/action-1">الخيار الأول</Dropdown.Item>
                <Dropdown.Item href="#/action-2">الخيار الثاني</Dropdown.Item>
                <Dropdown.Item href="#/action-3">خيار آخر</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
      </div>

      {/* Modal للفلاتر على الموبايل */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="border-0 dark:bg-[#1D1D1D] dark:text-white">
          <Modal.Title className="text-right w-full">
            <div className="text-lg font-bold">فلترة نتائج البحث</div>
            <div className="text-sm text-gray-500 mt-1 dark:text-gray-300">
              استخدم الفلاتر الذكية لتحديد الخيارات التي تناسبك بسهولة
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='dark:bg-[#1D1D1D]'>
          {/* السعر */}
          <div className="mb-6 text-right">
            <label className="block mb-2 text-base font-semibold text-gray-800 dark:text-white">
              نطاق الأسعار
            </label>
            <Slider
              range
              min={0}
              max={5000}
              step={50}
              value={priceRange}
              onChange={handlePriceChange}
              allowCross={false}
              trackStyle={[{ backgroundColor: '#DC3545', height: 8 }]}
              handleStyle={[
                {
                  borderColor: '#DC2626',
                  backgroundColor: '#fff',
                  borderWidth: 3,
                  width: 22,
                  height: 22,
                  marginTop: -7,
                },
                {
                  borderColor: '#DC2626',
                  backgroundColor: '#fff',
                  borderWidth: 3,
                  width: 22,
                  height: 22,
                  marginTop: -7,
                },
              ]}
              railStyle={{ backgroundColor: '#FECACA', height: 8 }}
            />
            <div className="flex justify-between mt-3">
              <div className="px-3 py-1 border rounded-md text-sm text-gray-800 dark:text-white dark:bg-[#2A2A2A]">
                {priceRange[0]} ج.م
              </div>
              <div className="px-3 py-1 border rounded-md text-sm text-gray-800 dark:text-white dark:bg-[#2A2A2A]">
                {priceRange[1]} ج.م
              </div>
            </div>
          </div>

          {/* فلاتر دروب داون */}
          <div className="flex flex-col gap-3 text-right">
            {["المنطقة", "عدد الأفراد", "عدد الغرف", "نوع السكن"].map((label, index) => (
              <Dropdown key={index}>
                <Dropdown.Toggle
                  variant="light"
                  className="w-full flex justify-between items-center border border-gray-300 rounded-lg py-3 px-4 text-sm font-medium text-gray-700 shadow-sm dark:bg-[#2A2A2A] dark:text-white"
                >
                  {label}
                </Dropdown.Toggle>
                <Dropdown.Menu className="text-right w-full dark:bg-[#2A2A2A]">
                  <Dropdown.Item href="#/action-1" className='dark:text-white'>الخيار الأول</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className='dark:text-white'>الخيار الثاني</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className='dark:text-white'>خيار آخر</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ))}
          </div>
        </Modal.Body>

        {/* زر الفلترة */}
        <div className="p-4 pt-0 dark:bg-[#1D1D1D]">
          <button
            onClick={() => setShowModal(false)}
            className="w-full bg-red-500 hover:bg-red-600 text-white text-base font-semibold py-3 rounded-full transition-all duration-200"
          >
            فلتر نتائجك الآن
          </button>
        </div>
      </Modal>

    </>
  );
};

export default FilterBar;
