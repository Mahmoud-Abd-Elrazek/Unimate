import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { IoIosSearch } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';

const FilterBar: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([400, 800]);

  const handlePriceChange = (value: number | [number, number]) => {
    if (Array.isArray(value)) {
      setPriceRange(value);
    }
  };

  return (
    <div className=" rounded-xl p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-3">
      
      {/* Search Icon */}
      <div className="rounded-full w-[2.5rem] h-[2.5rem] bg-red-500 flex justify-center items-center">
        <IoIosSearch className="text-white text-xl" />
      </div>

      {/* Price Slider */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full md:w-auto">
        <span className="text-sm text-gray-500">السعر</span>
        <div className="w-full md:w-40">
          <Slider
            range
            min={0}
            max={5000}
            step={50}
            value={priceRange}
            onChange={handlePriceChange}
            allowCross={false}
            trackStyle={[{ backgroundColor: '#EF4444', height: 12 }]}
            handleStyle={[
              {
                borderColor: '#EF4444',
                backgroundColor: '#fff',
                borderWidth: 6,
                width: 23,
                height: 23,
                marginTop: -7
              },
              {
                borderColor: '#EF4444',
                backgroundColor: '#fff',
                borderWidth: 6,
                width: 23,
                height: 23,
                marginTop: -7
              },
            ]}
            railStyle={{ backgroundColor: '#ccc', height: 12 }}
          />
        </div>
        <span className="text-sm whitespace-nowrap">
          {priceRange[0]} ج.م - {priceRange[1]} ج.م
        </span>
      </div>

      {/* Dropdowns */}
      {["عدد الافراد", "عدد الغرف", "النوع", "المنطقه"].map((label, index) => (
        <Dropdown key={index}>
          <Dropdown.Toggle className="bg-white text-black border border-gray-300 px-3 py-1 rounded-md text-sm shadow-sm" id={`dropdown-${index}`}>
            {label}
          </Dropdown.Toggle>
          <Dropdown.Menu className="text-right">
            <Dropdown.Item href="#/action-1">الخيار الأول</Dropdown.Item>
            <Dropdown.Item href="#/action-2">الخيار الثاني</Dropdown.Item>
            <Dropdown.Item href="#/action-3">خيار آخر</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ))}
    </div>
  );
};

export default FilterBar;
