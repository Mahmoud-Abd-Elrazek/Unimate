import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { IoIosSearch } from "react-icons/io";
import { LuFilter } from "react-icons/lu";
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'lucide-react';
import useApartmentData from "../../Store/DataApartment/useApartmentData.store";
import { toast } from 'sonner';

const locations = [
  { id: 0, key: 'AlMasaken', value: 'المساكن' },
  { id: 1, key: 'Darda', value: 'دردشه' },
  { id: 2, key: 'Shooun', value: 'الشؤون' },
  { id: 3, key: 'WastElBalad', value: 'وسط البلد' },
  { id: 4, key: 'ALKnooz', value: 'الكنوز' },
  { id: 5, key: 'ALMoataqal', value: 'المعتقل' },
  { id: 6, key: 'ALBank', value: 'البنك' },
  { id: 7, key: 'ALTameen', value: 'التأمين' },
  { id: 8, key: 'ALMahatta', value: 'المحطه' },
  { id: 9, key: 'ALSayyedaAisha', value: 'السيدة عايشة' },
  { id: 10, key: 'ALShahba', value: 'الشهباء' },
  { id: 11, key: 'ALKods', value: 'القدس' },
  { id: 12, key: 'ALMana', value: 'المعنا' },
  { id: 13, key: 'ALRamla', value: 'الرملة' },
  { id: 14, key: 'Dandara', value: 'دندرة' },
  { id: 15, key: 'QenaUniversity', value: 'جامعة جنوب الوادي' },
];

const filtersList = ["عدد الأفراد", "النوع", "المنطقة"];

export const FilterBar: React.FC = () => {
  const [priceRange,setPriceRange] = useState<[number, number]>([400, 800]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string }>({});

  const {
    setFromPrice,
    setToPrice,
    setGender,
    setCapacity,
    setLocation,
    fetchByEveryThing,
    setIsSearching,
    LOCATION,
    capecity,
    Gender,
    ToPrice,
    FromPrice,
    Keyword,
  } = useApartmentData();

  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setFromPrice(value[0]);
      setToPrice(value[1]);
      setPriceRange(value as [number, number]);
    }
  };

  const handleSelect = (filterName: string, value: string) => {
    setSelectedFilters(prev => ({ ...prev, [filterName]: value }));
  };

  useEffect(() => {
    if (selectedFilters["عدد الأفراد"]) {
      const match = selectedFilters["عدد الأفراد"].match(/\d+/);
      setCapacity(match ? parseInt(match[0]) : 0);
    }

    if (selectedFilters["النوع"]) {
      setGender(selectedFilters["النوع"] === "ولاد" ? 1 : 2);
    }

    const rawValue = selectedFilters["المنطقة"];
    if (typeof rawValue === "string") {
      const selectedLocation = locations.find(loc => loc.value.trim() === rawValue.trim());
      setLocation(selectedLocation ? selectedLocation.id : -1);
    } else {
      setLocation(-1);
    }
  }, [selectedFilters]);

  const Clearfilter=()=>{
    setSelectedFilters({});
    setIsSearching(false);
    setCapacity(0);
    setFromPrice(0);
    setGender(0);
    setLocation(-1);
    setToPrice(0);
    setPriceRange([400, 800]);
  }

  const applyFilters = () => {
    const noFiltersSelected = Gender === 0 && capecity === 0 && LOCATION === -1 && ToPrice === 0 && FromPrice === 0;
    const noKeyword = !Keyword || Keyword.trim() === "";

    if (noFiltersSelected && noKeyword) {
      toast.error("من فضلك اختر فلتر او أدخل كلمة مفتاحية للبحث.");
      return;
    }
    if (noFiltersSelected) {
      toast.error("من فضلك اختر على الأقل فلتر واحد قبل البحث.");
      return;
    }
    // if (noKeyword) {
    //   toast.error("من فضلك أدخل كلمة مفتاحية للبحث.");
    //   return;
    // }

    fetchByEveryThing();
    setShowModal(false);
  };

  const renderFilterDropdowns = () =>
    filtersList.map((label, index) => {
      let options: string[] = [];

      switch (label) {
        case "عدد الأفراد":
          options = ["1 فرد", "2 فردين", "3 أفراد", "4 أفراد أو أكثر"];
          break;
        case "النوع":
          options = ["ولاد", "بنات"];
          break;
        case "المنطقة":
          options = locations.map(loc => loc.value);
          break;
      }

      return (
        <Dropdown key={index}>
          <Dropdown.Toggle
            variant="light"
            className="w-full flex justify-between items-center border border-gray-300 rounded-lg py-3 px-4 text-sm font-medium text-gray-700 shadow-sm 
            dark:bg-secondary_BGD dark:text-BTN_TXD"
          >
            {selectedFilters[label] || label}
          </Dropdown.Toggle>
          <Dropdown.Menu className="text-right w-full dark:bg-secondary_BGD">
            {options.map((option, idx) => (
              <Dropdown.Item
                key={idx}
                onClick={() => handleSelect(label, option)}
                className="dark:text-secondary_TXD dark:hover:bg-primary_BGD dark:hover:text-BTN_TXD"
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      );
    });

  return (
    <>
      {/* زر الموبايل */}
      <div className="md:hidden flex justify-end mb-4 items-center gap-1" dir="rtl">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md"
        >
          <p>فلتر نتائجك</p>
          <LuFilter className="text-lg ml-2" />
        </button>
        <button
          onClick={Clearfilter}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-all dark:bg-BTN_BGD dark:hover:bg-primary_BGD"
        >
          <span className="hover:dark:text-primary_TXD dark:text-BTN_TXD">Clear Filters</span>
          <Trash2 className="sm:hidden w-5 h-5" />
        </button>
      </div>

      {/* ديسكتوب */}
      <div className="hidden md:flex w-full rounded-xl p-4 shadow-sm flex-col md:flex-col-reverse md:items-center md:justify-between gap-4 lg:flex-row dark:bg-secondary_BGD">
        <div className="w-full md:w-auto flex justify-center md:justify-start gap-2">
          <button
            onClick={Clearfilter}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-all dark:bg-BTN_BGD dark:hover:bg-primary_BGD"
          >
            <span className="hidden sm:inline dark:text-BTN_TXD">Clear Filters</span>
            <Trash2 className="sm:hidden w-5 h-5" />
          </button>
          <div
            className="rounded-full w-10 h-10 bg-red-500 flex items-center justify-center cursor-pointer"
            onClick={applyFilters}
          >
            <IoIosSearch className="text-white text-xl" />
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row sm:items-center gap-2 text-right">
          <span className="text-sm text-gray-500 dark:text-gray-300">السعر</span>
          <div className="w-full sm:w-64">
            <Slider
              range
              min={0}
              max={5000}
              step={50}
              value={priceRange}
              onChange={handlePriceChange}
              allowCross={false}
              trackStyle={[{ backgroundColor: '#DC3545', height: 8 }]}
              handleStyle={[{
                backgroundColor: '#DC2626',
                width: 20,
                height: 20,
                marginTop: -5
              }, {
                backgroundColor: '#DC2626',
                width: 20,
                height: 20,
                marginTop: -5
              }]}
              railStyle={{ backgroundColor: '#FECACA', height: 8 }}
            />
          </div>
          <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-200 whitespace-nowrap">
            {priceRange[0]} ج.م - {priceRange[1]} ج.م
          </span>
        </div>

        <div className="w-full md:w-auto flex flex-wrap justify-end gap-2">
          {renderFilterDropdowns()}
        </div>
      </div>

      {/* مودال الموبايل */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="border-0 dark:bg-secondary_BGD dark:text-BTN_TXD">
          <Modal.Title className="text-right w-full pr-2">
            <div className="text-lg font-bold">فلترة نتائج البحث</div>
            <div className="text-sm text-gray-500 mt-1 dark:text-primary_TXD">
              استخدم الفلاتر الذكية لتحديد الخيارات التي تناسبك بسهولة
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="dark:bg-secondary_BGD">
          <div className="mb-6 text-right">
            <label className="block mb-2 text-base font-semibold text-gray-800 dark:text-white">نطاق الأسعار</label>
            <Slider
              range
              min={0}
              max={5000}
              step={50}
              value={priceRange}
              onChange={handlePriceChange}
              allowCross={false}
              trackStyle={[{ backgroundColor: '#DC3545', height: 8 }]}
              handleStyle={[{
                borderColor: '#DC2626',
                backgroundColor: '#fff',
                borderWidth: 3,
                width: 22,
                height: 22,
                marginTop: -7
              }, {
                borderColor: '#DC2626',
                backgroundColor: '#fff',
                borderWidth: 3,
                width: 22,
                height: 22,
                marginTop: -7
              }]}
              railStyle={{ backgroundColor: '#FECACA', height: 8 }}
            />
            <div className="flex justify-between mt-3">
              <div className="px-3 py-1 border rounded-md text-sm text-gray-800 dark:text-BTN_TXD dark:bg-BTN_BGD">{priceRange[0]} ج.م</div>
              <div className="px-3 py-1 border rounded-md text-sm text-gray-800 dark:text-BTN_TXD dark:bg-BTN_BGD">{priceRange[1]} ج.م</div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-right">
            {renderFilterDropdowns()}
          </div>
        </Modal.Body>

        <div className="bg-BTN_TXD dark:bg-secondary_BGD py-3 px-2 rounded-b-lg">
          <button
            onClick={applyFilters}
            className="w-full bg-red-500 hover:bg-red-600 text-BTN_TXD text-[14px] font-semibold py-3 rounded-full transition-all duration-200"
          >
            فلتر نتائجك الآن
          </button>
        </div>
      </Modal>
    </>
  );
};


