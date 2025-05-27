// useApartmentData.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

interface Apartment {
  capecity: number;
  price: number;
  numberOfRooms: number;
  ownerName: string;
  location: string;
  floor: string;
  gender: string;
  images: string[];
}

interface ApartmentDataState {
  apartments: Apartment[];
  newApartments: Apartment[];
  topRated: Apartment[];
  totalCount: number;
  isLoading: boolean;
  isSearching: boolean;
  setIsSearching: (searching: boolean) => void;
  fetchByKeyword: (keyword: string) => Promise<void>;
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
      setIsSearching: (searching) => set({ isSearching: searching }),
      fetchByKeyword: async (keyword) => {
        try {
          set({ isLoading: true, isSearching: true });
          const res = await axios.get(`https://darkteam.runasp.net/GetApartmentEndpoint/GetApartment?Keyword=${keyword}`);
          set({ apartments: res.data.data.apartments || [] });
        } catch (error) {
          console.error("Error fetching by keyword:", error);
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
