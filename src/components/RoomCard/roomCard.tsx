import { IoMdPeople } from "react-icons/io";

import Room_Photo from '../../assets/room_photo.jpg';
import { Link } from 'react-router-dom';
export default function RoomCard() {
    return (
        <div className="rounded ">
            <div className="card" style={{ 'width': '18rem' }} >
                <img className="card-img-top" src={Room_Photo} alt="Card image cap" />
                <div className="  mt-5 px-2 text-right">
                    <h5 className="card-title">غرفه على الشارع فيها بلكونه</h5>
                    <h5 className="card-title">
                        <span>أفراد</span><span>4</span>
                    </h5>

                    <div className=" flex justify-end items-center mt-4">
                        <div> <Link to='/' className='underline text-yellow-300'>تعرف على اصدقاء الغرفه</Link></div> 
                        <div>
                        <IoMdPeople className="IconSize text-green-500" />
                        </div>

                    </div>
                    <div className="flex justify-around items-ceenter mt-20 mb-5">

                        <Link to="/" className="btn btn-success">حجز سرير</Link>
                        <Link to="/" className="btn bg-gray-300">حجز غرفه بالكامل</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
