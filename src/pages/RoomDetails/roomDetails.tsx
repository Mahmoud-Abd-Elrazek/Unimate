// import React from 'react'
import { IoShareOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { IoWifi } from "react-icons/io5";
import HotWater from "../../assets/material-symbols-light_water-heater-outline.png"
import TV from '../../assets/heroicons_tv.png'
import Kitchen from '../../assets/hugeicons_kitchen-utensils.png'
import Washing from '../../assets/solar_washing-machine-outline.png'
import Air_codition from '../../assets/iconoir_air-conditioner.png'
import Fireplace from '../../assets/fluent_fireplace-20-regular.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export default function RoomDetails() {
    return (
        <div className="min-h-lvh pt-5">
            {/* the first section */}
            <div className="flex justify-between items-center px-5">

                <div className="flex">
                    <div className="flex ">
                        <IoShareOutline className="IconSize" />
                        <h2 className="underline">مشاركه</h2>
                    </div>
                    <div className="flex ">
                        <FcLike className="IconSize" />
                        <h2 className="underline">حفظ</h2>
                    </div>
                </div>
                <h1 className="text-2xl font-semibold text-right">جوله تصوير</h1>
            </div>
            {/* Imgs Section */}
            <div></div>
            {/* the description section */}
            <div></div>
            <hr className="border-t border-gray-300 w-3/6 ml-auto my-10" />
            {/* ما يقدمه السكن */}
            <div className="flex justify-between items-center my-10 h-[25rem]">
                {/* left */}
                <div className="left   h-full mx-4 p-10 w-[25rem] border border-gray-600 grid text-right">
                   
                        <div className="h-[2rem] rounded-lg MainColorBG w-full text-center text-white font-semibold">سكن اولاد</div>
                        <h2 className="text-xl py-3">ابدأ عمليه الحجز للمسكن بالكامل من هنا</h2>
                        <h2 className="text-xl text-green-500 py-3"><span className="text-black">فى الشهر</span>6,600  </h2>
                        <h2 className="text-xl py-3">يتسع هذا المسكن ال 12 ضيف كحد اقصى</h2>
                        <button className="MainColorBG text-white rounded-3xl h-[2rem]">احجز الان</button>
                </div>
                {/* right */}
                <div className="right  h-full px-5">
                    <h2 className="text-2xl text-right ">ما يقدمه السكن</h2>
                    {/* the features */}
                    <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-5">
                        <div className="flex">
                            <h3>واى فاى</h3>
                            <IoWifi className="IconSize" />
                        </div>
                        <div className="flex">
                            <h3>ماء سخن</h3>
                            <img src={HotWater} alt="img" className="IconSize" />
                        </div>
                        <div className="flex">
                            <h3>تلفيزيون</h3>
                            <img src={TV} alt="img" className="IconSize" />
                        </div>
                        <div className="flex">
                            <h3>غساله</h3>
                            <img src={Kitchen} alt="img" className="IconSize" />
                        </div>
                        <div className="flex">
                            <h3>غساله</h3>
                            <img src={Washing} alt="img" className="IconSize" />
                        </div>
                        <div className="flex">
                            <h3>مدفأه</h3>
                            <img src={Fireplace} alt="img" className="IconSize" />
                        </div>
                        <div className="flex">
                            <h3>تكييف</h3>
                            <img src={Air_codition} alt="img" className="IconSize" />
                        </div>
                    </div>
                    <button className="border border-black rounded-lg w-[15rem] mt-10">عرض كل المميزات ال 10</button>
                </div>
            </div>
            <hr className="border-t border-gray-300 w-3/6 ml-auto my-10" />
            {/* a plcae for sleeping */}
            <div>
                
            </div>
        </div>
    )
}
