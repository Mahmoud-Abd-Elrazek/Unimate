import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Users, DollarSign, Snowflake, User, GraduationCap, MapPin, UserPlus } from "lucide-react";
// import { Turtle } from "lucide-react";
import { PiBed } from "react-icons/pi";
import { Avatar, AvatarImage } from "./ui/avatar";
import EmptyState from "./EmptyRooms"
import useAuthStore from "../../Store/Auth/Auth.store";
import { toast } from 'sonner';
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { AvatarFallback } from "./ui/avatar";
// import { number } from "zod";


interface Student {
  collage: string;
  location: string;
  level: string;
}

interface Room {
  bedRequestAvailable: boolean;
  imageRoomUrl: string;
  isFull: boolean;
  numBedNotBooked: number;
  numOfBeds: number;
  pricePerBed: number;
  roomId: number;
  roomRequestAvailable: boolean;
  isAvailable: boolean; // معنها ان في شخص حجز السكن كله واتقبل
  apartmentId: number;
  studentDTOs: Student[];
}

interface RoomsSliderProps {
  rooms?: Room[];
}


const RoomCard = ({ room, onJoinRoom, onBookFullRoom }: {
  room: Room;
  onJoinRoom: (roomId: number, apartment: number) => void;
  onBookFullRoom: (roomId: number, apartmentId: number) => void;
}) => {
  const availableSpots = room.numBedNotBooked;
  const imageUrl = room.imageRoomUrl;
  const hasAC = true; //room.hasAC; static todoes 
  const role = useAuthStore((state) => state.role);
  const isApartmentAvailable = room.isAvailable;
  // console.log(room.apartmentId)
  return (
    <Card className="w-full max-w-md mx-auto shadow-md" dir="rtl">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center justify-between">
          <span>غرفة</span>
          <Badge
            variant={room.isFull ? "destructive" : "default"}
            className={`${room.isFull ? 'bg-red-500' : 'bg-green-500'} text-white border-none outline-none`}
          >
            {room.isFull ? "مكتملة" : "متاحة"}
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Room Details */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{room.numOfBeds} أفراد</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{room.pricePerBed} ج.م/سرير</span>
          </div>
          <div className="flex items-center gap-2">
            <Snowflake className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{hasAC ? "مكيفة" : "غير مكيفة"}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{availableSpots} أماكن متاحة</span>
          </div>
        </div>

        {/* Add this clickable image before the students list */}
        <div className="mb-3">
          <img
            src={imageUrl}
            alt="Special Image"
            className="w-full h-[180px] rounded-lg border"
          />
        </div>

        {/* Current Students */}
        <div>
          <h4 className="font-semibold mb-3 text-sm border-b pb-1">الطلاب الحاليين:</h4>
          <div className="max-h-[160px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">

            {room.numBedNotBooked !== 0 ? (
              room.studentDTOs.map((student, index) => (
                <div key={index} className="flex items-center gap-3 py-2 border-b bg-muted rounded-lg">
                  <div
                    className="cursor-pointer"
                  >
                    <Avatar className="h-10 w-10">
                      {/* <AvatarImage src={student.profilePic} alt={student.name} /> */}
                      <AvatarImage src={""} alt={""} />
                      {/* <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback> */}
                    </Avatar>
                  </div>
                  <div className="flex-1 min-w-0">
                    {/* <p className="font-medium text-sm truncate">{student.name}</p> */}
                    <div className="flex items-center gap-1 text-sm text-muted-foreground font-semibold mb-1">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <span>{student.collage} - {student.level}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground ">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{student.location}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-sm text-center py-2">
                لا يوجد طلاب في الغرفة حالياً
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {role === "Student" ? (
          <div className="space-y-2 pt-2">
            {isApartmentAvailable && room.bedRequestAvailable && (
              <Button
                className="w-full bg-[#d32f2f] text-white hover:bg-[#b71c1c]"
                onClick={() => onJoinRoom(room.roomId, room.apartmentId)}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                انضم للغرفة ({room.pricePerBed} ج.م)
              </Button>
            )}


            {isApartmentAvailable && room.roomRequestAvailable && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => onBookFullRoom(room.roomId, room.apartmentId)}
              >
                احجز الغرفة كاملة ({room.numOfBeds * room.pricePerBed} ج.م)
              </Button>
            )}

            {/* todoes */}
            {!isApartmentAvailable || room.isFull && (
              <Button disabled className="w-full bg-[#d32f2f] text-white hover:bg-[#b71c1c]">
                الغرفة مكتملة
              </Button>
            )}

          </div>
        ) : null}
      </CardContent>

    </Card>
  );
};

const RoomsSlider: React.FC<RoomsSliderProps> = ({ rooms = [] }) => {
  if (rooms.length === 0) {
    return <EmptyState />;
  }
  // console.log(rooms)
  const handleJoinRoom = (roomId: number, apartmentId: number) => {
    // console.log("Join room:", roomId);
    // console.log("Join room in apartment id is:", apartmentId);
    // Add your logic here

    const token = localStorage.getItem('token'); // Replace 'authToken' with your actual key

    if (!token) {
      console.error('No token found in localStorage');
      // Handle case where user isn't logged in
      return;
    }

    const url = 'https://darkteam.runasp.net/BookBedEndpoint/BookBed';
    const data = {
      "apartmentId": apartmentId,
      "roomId": roomId
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(async response => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Request failed');
        }
        return response.json();
      })
      .then(data => {
        // console.log('Booking successful for bed:', data);
        // Handle successful booking
        toast.success(data.message);
      })
      .catch(error => {
        console.error('Booking failed:', error.message);
        // Handle errors (e.g., token expired, invalid data)

        // Optional: Clear token if unauthorized
        if (error.message.includes('401')) {
          localStorage.removeItem('token');
          // Redirect to login or show login prompt
        }
      });
  };

  const handleBookFullRoom = (roomId: number, apartmentId: number) => {
    // console.log("Book full room:", roomId);
    // console.log("Book full room in apatment of id:", apartmentId);
    // Add your logic here
    // Get token from localStorage
    const token = localStorage.getItem('token'); // Replace 'authToken' with your actual key

    if (!token) {
      console.error('No token found in localStorage');
      // Handle case where user isn't logged in
      return;
    }

    const url = 'https://darkteam.runasp.net/BookApartmentEndpoint/BookApartment';
    const data = {
      "apartmentId": apartmentId,
      "roomId": roomId
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(async response => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Request failed');
        }
        return response.json();
      })
      .then(data => {
        // console.log('Booking successful for all room:', data);
        // Handle successful booking
        toast.success(data.message);
      })
      .catch(error => {
        // console.error('Booking failed:', error.message);
        // Handle errors (e.g., token expired, invalid data)

        // Optional: Clear token if unauthorized
        if (error.message.includes('401')) {
          localStorage.removeItem('token');
          // Redirect to login or show login prompt
        }
      });
  };

  return (
    <div className="w-full space-y-4">
      <div className="text-right">
        <h2 className="flex gap-2 items-center justify-end mb-1 text-lg md:text-xl text-right font-semibold">
          مكان النوم
          <PiBed className="inline-block mr-2" />
        </h2>
        <p className="text-muted-foreground">
          تصفح الغرف بشكل افقي واختر ما يناسبك
        </p>
      </div>

      <Carousel className="w-full max-w-6xl mx-auto text-right">
        <CarouselContent className="-ml-2 md:-ml-4 justify-end">
          {rooms.map((room) => (
            <CarouselItem key={room.roomId} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 ">
              <RoomCard
                room={room}
                onJoinRoom={handleJoinRoom}
                onBookFullRoom={handleBookFullRoom}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default RoomsSlider;