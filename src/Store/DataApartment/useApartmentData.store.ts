// useApartmentData.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { toast } from 'sonner';

export interface Apartment {
  capecity: number;
  price: number;
  numberOfRooms: number;
  ownerName: string;
  // location: string;
  floor: string;
  gender: string;
  images: string[];
  detailedAddress:string;
  location:number;

}

interface ApartmentDataState {
  apartments: Apartment[];
  newApartments: Apartment[];
  topRated: Apartment[];
  totalCount: number;
  isLoading: boolean;
  isSearching: boolean;
  // for fillter
  Keyword:string;
  ToPrice: number;
  FromPrice: number;
  Gender: number;
  capecity: number;
  Location: number;
  setKeyword:(Keyword:string)=>void;
  setToPrice:(price:number)=>void;
  setFromPrice:(price:number)=>void;
  setGender:(g:number)=>void;
  setCapacity:(c:number)=>void;
  setLocation:(l:number)=>void;
  setIsSearching: (searching: boolean) => void;
  // fetchByKeyword: (keyword: string) => Promise<void>;
  fetchByEveryThing: () => Promise<void>;
  fetchTopRated: () => Promise<void>;
  fetchNew: (pageSize: number) => Promise<void>;
}

const useApartmentData = create<ApartmentDataState>()(
  persist(
    (set) => ({
      apartments: [],
      newApartments: [],
      topRated: [],
      totalCount: 0,
      isLoading: false,
      isSearching: false,
      ToPrice: 2000,
      FromPrice: 0,
      Gender: 0,
      capecity: 0,
      Location: -1,
      Keyword: "",
      setKeyword: (keyword: string) => set({ Keyword: keyword }),
      setCapacity:(c:number)=>set({capecity:c}),
      setFromPrice:(f:number)=>set({FromPrice:f}),
      setToPrice:(t:number)=>set({ToPrice:t}),
      setGender:(g:number)=>set({Gender:g}),
      setLocation:(l:number)=>set({Location:l}),
      
      setIsSearching: (searching) => set({ isSearching: searching }),
      
      // fetchByKeyword: async (keyword) => {
      //   try {
      //     set({ isLoading: true, isSearching: true });
      //     const res = await axios.get(`https://darkteam.runasp.net/SearchForApartmentEndpoint/SearchForApartment?PageNumber=1&PageSize=20&Keyword=${keyword}`);
      //     console.log("Response from fetchByKeyword:", res);
      //     if (res.data.isSuccess !== true) {
      //       throw new Error("Failed to fetch apartments by keyword");
      //     }
      //     set({ apartments: res.data.data.dtOs || [] });
      //   } catch (error) {
      //     console.error("Error fetching by keyword:", error);
      //   } finally {
      //     set({ isLoading: false });
      //   }
      // },
      fetchByEveryThing: async () => {
        try {
          set({ isLoading: true, isSearching: true });
          const state = useApartmentData.getState();
          if(state.Keyword=="")
          {
            toast.error("please enter a keyword for this")
          }else
          {

            const res = await axios.get(`https://darkteam.runasp.net/SearchForApartmentEndpoint/SearchForApartment?PageNumber=1&PageSize=20&Keyword=${state.Keyword}&FromPrice=${state
              .FromPrice}&ToPrice=${state.ToPrice}&Capecity=${state.capecity}&Location=${Location}&Gender=${state.Gender}`);
            console.log("Response from fetchByEveryThing:", res);
            if (res.data.isSuccess !== true) {
              throw new Error("Failed to fetch apartments by everything");
            }
            set({ apartments: res.data.data.dtOs || [] });
          }
          } catch (error) {
            const state=useApartmentData.getState();
            console.error("Error fetching by everything:", error);
            console.log("Request parameters:", {
              Keyword: state.Keyword,
              FromPrice: state.FromPrice,
              ToPrice: state.ToPrice,
              Capecity: state.capecity,
              Location: state.Location,
              Gender: state.Gender
            });
          } finally {
            set({ isLoading: false });
          }
      },



      fetchTopRated: async () => {
        try {
          set({ isLoading: true });
          const res = await axios.get(`https://darkteam.runasp.net/GetApartmentEndpoint/GetApartment?PageNumber=1&PageSize=6`);
          set({ topRated: res.data.data.apartments || [] });
        } catch (error) {
          console.error("Error fetching top-rated:", error);
        } finally {
          set({ isLoading: false });
        }
      },


      fetchNew: async (pageSize) => {
        try {
          set({ isLoading: true });
          const res = await axios.get(`https://darkteam.runasp.net/GetApartmentEndpoint/GetApartment?PageNumber=1&PageSize=${pageSize}`);
          set({
            newApartments: res.data.data.apartments || [],
            totalCount: res.data.data.totalCount || 0,
          });
        } catch (error) {
          console.error("Error fetching new:", error);
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "apartment-storage",
    }
  )
);

export default useApartmentData;
