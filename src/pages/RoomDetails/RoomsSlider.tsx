import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Users, DollarSign, Snowflake, User, GraduationCap, MapPin, UserPlus } from "lucide-react";
import { PiBed } from "react-icons/pi";


interface Student {
  id: string;
  name: string;
  college: string;
  year: string;
  origin: string;
  profilePic: string;
}

interface Room {
  id: string;
  capacity: number;
  pricePerBed: number;
  hasAC: boolean;
  isFull: boolean;
  currentStudents: Student[];
  roomNumber: string;
}

const mockRooms: Room[] = [
  {
    id: "room1",
    roomNumber: "1",
    capacity: 4,
    pricePerBed: 800,
    hasAC: true,
    isFull: false,
    currentStudents: [
      {
        id: "student1",
        name: "",
        college: "كلية الهندسة",
        year: "الفرقة الثالثة",
        origin: "القاهرة",
        profilePic: ""
      },
      {
        id: "student2",
        name: "",
        college: "كلية الطب",
        year: "الفرقة الثانية",
        origin: "الإسكندرية",
        profilePic: "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/495742108_10171304864005440_8161025723431854082_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X8ppLwEXs-YQ7kNvwGUmFsQ&_nc_oc=AdnpvIkxs1tF3PPVdhix1_ybKHPgHzkTVcpsJgsYk91iu60EakkzpmjS6_wb5XD1dhk&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=BSW6pj8Wo3_e5s4VsHXqlw&oh=00_AfJlQbgaOKZ2yqlddbDCO9pZHMMI_cU_j2juOV4xmOaXcA&oe=683A0398",
      }
    ]
  },
  {
    id: "room2",
    roomNumber: "2",
    capacity: 2,
    pricePerBed: 1000,
    hasAC: true,
    isFull: true,
    currentStudents: [
      {
        id: "student3",
        name: "",
        college: "كلية التجارة",
        year: "الفرقة الأولى",
        origin: "الجيزة",
        profilePic: ""
      },
      {
        id: "student3",
        name: "",
        college: "كلية التجارة",
        year: "الفرقة الأولى",
        origin: "الجيزة",
        profilePic: ""
      },
      {
        id: "student3",
        name: "",
        college: "كلية التجارة",
        year: "الفرقة الأولى",
        origin: "الجيزة",
        profilePic: ""
      },
      {
        id: "student3",
        name: "",
        college: "كلية التجارة",
        year: "الفرقة الأولى",
        origin: "الجيزة",
        profilePic: ""
      },
      {
        id: "student4",
        name: "",
        college: "كلية الحقوق",
        year: "الفرقة الرابعة",
        origin: "المنصورة",
        profilePic: ""
      }
    ]
  },
  {
    id: "room3",
    roomNumber: "3",
    capacity: 3,
    pricePerBed: 750,
    hasAC: false,
    isFull: false,
    currentStudents: []
  },
  {
    id: "room4",
    roomNumber: "4",
    capacity: 4,
    pricePerBed: 900,
    hasAC: true,
    isFull: false,
    currentStudents: [
      {
        id: "student5",
        name: "",
        college: "كلية الصيدلة",
        year: "الفرقة الثالثة",
        origin: "أسوان",
        profilePic: ""
      }
    ]
  }
];

const RoomCard = ({ room, onJoinRoom, onBookFullRoom }: {
  room: Room;
  onJoinRoom: (roomId: string) => void;
  onBookFullRoom: (roomId: string) => void;
}) => {
  const availableSpots = room.capacity - room.currentStudents.length;

  return (
    <Card className="w-full max-w-md mx-auto shadow-md" dir="rtl">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center justify-between">
          <span>غرفة {room.roomNumber}</span>
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
            <span className="text-sm">{room.capacity} أفراد</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{room.pricePerBed} ج.م/سرير</span>
          </div>
          <div className="flex items-center gap-2">
            <Snowflake className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{room.hasAC ? "مكيفة" : "غير مكيفة"}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{availableSpots} أماكن متاحة</span>
          </div>
        </div>

        {/* Add this clickable image before the students list */}
        <div className="mb-3">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Special Image"
            className="w-full h-[180px] rounded-lg border"
          />
        </div>

        {/* Current Students */}
        <div>
          <h4 className="font-semibold mb-3 text-sm border-b pb-1">الطلاب الحاليين:</h4>
          <div className="max-h-[160px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
            {room.currentStudents.length > 0 ? (
              room.currentStudents.map((student) => (
                <div key={student.id} className="flex items-center gap-3 py-2 border-b bg-muted rounded-lg">
                  {/* Clickable Avatar that opens image in modal */}
                  <div
                    className="cursor-pointer"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={student.profilePic} alt={student.name} />
                      <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{student.name}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground font-semibold mb-1">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <span>{student.college} - {student.year}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground ">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{student.origin}</span>
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
        <div className="space-y-2 pt-2">
          {!room.isFull && availableSpots > 0 && (
            <Button
              className="w-full bg-[#d32f2f] text-white hover:bg-[#b71c1c]"
              onClick={() => onJoinRoom(room.id)}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              انضم للغرفة ({room.pricePerBed} ج.م)
            </Button>
          )}

          {room.currentStudents.length === 0 && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => onBookFullRoom(room.id)}
            >
              احجز الغرفة كاملة ({room.capacity * room.pricePerBed} ج.م)
            </Button>
          )}

          {room.isFull && (
            <Button disabled className="w-full bg-[#d32f2f] text-white hover:bg-[#b71c1c]">
              الغرفة مكتملة
            </Button>
          )}
        </div>
      </CardContent>

    </Card>
  );
};

const RoomsSlider = () => {
  const handleJoinRoom = (roomId: string) => {
    console.log("Join room:", roomId);
    // Add your logic here
  };

  const handleBookFullRoom = (roomId: string) => {
    console.log("Book full room:", roomId);
    // Add your logic here
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

      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {mockRooms.map((room) => (
            <CarouselItem key={room.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
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