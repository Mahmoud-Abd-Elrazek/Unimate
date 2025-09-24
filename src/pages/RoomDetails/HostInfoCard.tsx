import { PiBuildingApartmentLight } from "react-icons/pi";
import { PiUser } from "react-icons/pi";

// import { TbImageInPicture } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

interface OwnerDTO {
   id: string;
   fName: string;
   lName: string;
   image: string | null;
   apartmentsOwned: number;
}

interface HostInfoCardProps {
   data?: {
      ownerDTO?: OwnerDTO;
   };
}

const HostInfoCard: React.FC<HostInfoCardProps> = ({ data }) => {
   const navigate = useNavigate();

   // Safely extract owner data with default values
   const apartmentOwnerId = data?.ownerDTO?.id || '';
   const firstName = data?.ownerDTO?.fName || 'Unknown';
   const lastName = data?.ownerDTO?.lName || 'Host';
   const imageUrl = data?.ownerDTO?.image;
   const apartmentsOwned = data?.ownerDTO?.apartmentsOwned || 0;

   // If no owner data is provided
   if (!data?.ownerDTO) {
      return (
         <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p>No host information available</p>
         </div>
      );
   }

   return (
      <div className="flex justify-between items-start border dark:bg-secondary_BGD shadow-md rounded-2xl p-6 max-w-sm" dir="ltr">
         {/* معلومات التقييمات */}
         <div className="flex flex-col text-center gap-4 text-sm text-gray-700">
            <div className="dark:text-secondary_TXD">
               <div className="text-xl font-bold mb-1">+{apartmentsOwned}</div>
               <div className="flex gap-1 font-semibold">
                  عقار
                  <PiBuildingApartmentLight size={18} className="fill-gray text-gray" />
               </div>
            </div>
            {/* <div className="dark:text-secondary_TXD">
               <div className="text-xl font-bold flex items-center justify-center gap-1">
                  5.0
                  <Star className="w-4 h-4 fill-gray text-gray" />
               </div>
               <div>التقييم بالنجوم</div>
            </div> */}

         </div>

         {/* صورة واسم المضيف */}
         <button className="flex flex-col items-center text-center gap-1 cursor-pointer hover:opacity-90"
            title="open account"
            onClick={() => {
               const token = localStorage.getItem("token");
               if (token) {
                  navigate(`/auther/ownerprofile`, {
                     state: {gustId: apartmentOwnerId}
                  })
               } else {
                  // alert("You must be logged in first.");
                  navigate("/SignIn");
               }
            }}
         >
            <div className="relative">
               <div
                  className={`w-24 h-24 rounded-full flex justify-center items-center ${!imageUrl ? 'border-1 border-gray-300 bg-gray-100' : ''
                     }`}>
                  {imageUrl ? (
                     <img
                        src={imageUrl}
                        alt="Host"
                        className="w-24 h-24 rounded-full"
                     />
                  ) : (
                     <div>
                        <PiUser size={70} className="fill-gray text-gray-600" />
                     </div>
                  )}
               </div>
               <div className="absolute bottom-0 right-0 bg-pink-500 rounded-full p-1" title="verified from UniMate">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414L9 13.414l4.707-4.707z"
                        clipRule="evenodd"
                     />
                  </svg>
               </div>
            </div>
            <div className="text-lg font-bold"> {firstName} {lastName} </div>
            <div className="text-sm text-muted-foreground">مالك العقار</div>
         </button>
      </div>
   );
}

export default HostInfoCard;