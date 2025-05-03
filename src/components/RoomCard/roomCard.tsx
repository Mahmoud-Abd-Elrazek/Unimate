import './roomCard.css'
import { IoMdPeople } from "react-icons/io";

import Room_Photo from '../../assets/room_photo.jpg';
import { Link } from 'react-router-dom';
import Roomate from "../RoomMateComponent/roomate";
export default function RoomCard() {
    return (
        <div className="rounded">
            <div className="card dark:bg-[#171515] dark:text-[white] " style={{ 'width': '18rem'}} >
                <img className="card-img-top" src={Room_Photo} alt="Card image cap" />
                <div className="  mt-5 px-2 text-right">
                    <h5 className="card-title">غرفه على الشارع فيها بلكونه</h5>
                    <h5 className="card-title">
                        <span>أفراد</span><span>4</span>
                    </h5>

                    <div className=" flex  items-center mt-4 text-right " dir="rtl">
                        <div>
                        <IoMdPeople className="IconSize text-green-500" />
                        </div>
                        <div> <Link to='/' className='underline text-yellow-300 '>تعرف على اصدقاء الغرفه</Link></div> 

                    </div>
                    <div className="mt-2 max-h-[15rem] overflow-y-auto scroll-hide ">
                        <Roomate/>
                        <Roomate/>
                        <Roomate/>
                        <Roomate/>
                        <Roomate/>
                    </div>
                    <div className="flex justify-around items-ceenter mt-20 mb-3">

                        <Link to="/" className="btn MainColorBG text-white">حجز سرير</Link>
                        <Link to="/" className="btn hover:bg-slate-300 bg-gray-300">حجز غرفه بالكامل</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
