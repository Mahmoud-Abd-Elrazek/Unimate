import './roomCard.css'
import { IoMdPeople } from "react-icons/io";

import Room_Photo from '../../assets/room_photo.jpg';
import { Link } from 'react-router-dom';
import Roomate from "../RoomMateComponent/roomate";
export default function RoomCard() {
    return (
        <div className="rounded">
            <div className="card dark:bg-[#171515] dark:text-[white] " style={{ 'width': '18rem' }} >
                <img className="card-img-top" src={Room_Photo} alt="Card image cap" />
                <div className="  mt-2 px-2 text-right">
                    <p className="card-title">غرفه على الشارع فيها بلكونه</p>
                    <h5 className="card-title">
                        <span> 4 </span>
                        <span>أفراد</span>
                    </h5>

                    <div className=" flex  items-center mt-1 text-right " dir="rtl">
                        <div>
                            <IoMdPeople className="IconSize text-green-500" />
                        </div>
                        <div className='text-[#777]'> تعرف على اصدقاء الغرفه</div>
                    </div>
                    <div className="mt-2 overflow-y-auto scroll-hide ">
                        <Roomate />
                        <Roomate />
                        <Roomate />
                    </div>
                    <div className="flex justify-around items-ceenter mt-2 mb-2">
                        <Link to="/" className="btn MainColorBG text-white text-[14px]">حجز سرير</Link>
                        <Link to="/" className="btn hover:bg-slate-300 bg-gray-300 text-[14px]">حجز غرفه بالكامل</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
