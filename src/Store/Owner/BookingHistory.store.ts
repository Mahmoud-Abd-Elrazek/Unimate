import axios from 'axios';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import useAuthStore from '../Auth/Auth.store';


interface Request{
   requestId:number;
  apartmentName:string;
  requestDate:string;
  status:string;
  booking:string;
}
interface Bookingstate{
  issuccess:boolean;
  message:string;
  requests:Request[];
  GetOwnerRequests:()=>void
  GetStudentBookingHistory:()=>void
}
export const useBookingHistoryStore = create<Bookingstate>()(
  persist(
    (set) => ({
      bookingHistory: [],
     issuccess:false,
     message:"",
     requestId:0,
     apartmentName:"",
     requestDate:"",
     status:"",
     booking:"",
     requests:[],
      GetOwnerRequests:async()=>{
        try{

            const res=axios.get("https://darkteam.runasp.net/GetOwnerBookingRequestsEndpoint/GetRequests",
                {
                    headers: {
                        Authorization: `Bearer ${useAuthStore.getState().token}`,
                    },
                }
            )
            
            console.log("Owner requests fetched successfully:", await res);
            set({issuccess:(await res).data.issuccess, message:(await res).data.message})
        } catch (error) {
            console.error("Failed to get owner requests:", error);
        }
      },
     GetStudentBookingHistory: async () => {
    try {
      const res = await axios.get(
        'https://darkteam.runasp.net/GetStudentBookingHistoryEndpoint/GetStudentBookingHistory',
        {
          headers: {
            Authorization: `Bearer ${useAuthStore.getState().token}`,
          },
        }
      )

      set({
        requests: res.data.data,
        
        message: res.data.message,
      })

      console.log('Fetched Requests:', res.data)
      // console.log(requests)
    } catch (error) {
      console.error('❌ Failed to fetch student history', error)
    }
  },
    }),
    {
      name: "booking-history-storage",
    }
  )
);