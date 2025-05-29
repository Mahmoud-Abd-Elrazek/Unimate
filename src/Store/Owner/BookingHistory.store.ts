import axios from 'axios';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import useAuthStore from '../Auth/Auth.store';

export const useBookingHistoryStore = create(
  persist(
    (set) => ({
      bookingHistory: [],
     
      GetOwnerRequests:async()=>{
        try{

            const res=axios.get("https://darkteam.runasp.net/GetOwnerBookingRequestsEndpoint/GetRequests",
                {
                    headers: {
                        Authorization: `Bearer ${useAuthStore.getState().token}`,
                    },
                }
            )
            set({
               
            })
            console.log("Owner requests fetched successfully:", await res);
        } catch (error) {
            console.error("Failed to get owner requests:", error);
        }
      }
    }),
    {
      name: "booking-history-storage",
    }
  )
);