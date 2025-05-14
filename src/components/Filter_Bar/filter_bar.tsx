import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { IoIosSearch } from "react-icons/io";
// import { FaFilter } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

const FilterBar: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([400, 800]);
  // const [showModal, setShowModal] = useState(false);

  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setPriceRange([value[0], value[1]]);
    }
  };

  return (
    <div className="w-full rounded-xl p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-3 dark:bg-[#1e293b]">

      {/* Search Icon */}
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <div className="rounded-full w-10 h-10 bg-red-500 flex items-center justify-center">
          <IoIosSearch className="text-[white] text-xl" />
        </div>
      </div>
      {/* Price Range */}
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

      {/* Price in big screens*/}
      <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-200 whitespace-nowrap">
        {priceRange[0]} ج.م - {priceRange[1]} ج.م
      </span>


      {/* Dropdown Filters */}
      <div className="w-full md:w-auto flex flex-wrap justify-between gap-2">
        {["عدد الأفراد", "عدد الغرف", "النوع", "المنطقة"].map((label, index) => (
          <Dropdown key={index}>
            <Dropdown.Toggle
              variant="light"
              className="bg-white dark:bg-[#2A2A2A] text-black dark:text-white border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-md text-sm shadow-sm"
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
  );
};

export default FilterBar;
