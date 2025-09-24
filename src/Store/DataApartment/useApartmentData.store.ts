// useApartmentData.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
// import { toast } from 'sonner';

export interface Apartment {
  capecity: number;
  price: number;
  numberOfRooms: number;
  ownerName: string;
  floor: string;
  gender: string;
  images: string[];
  detailedAddress: string;
  location: number;
}

interface ApartmentDataState {
  apartments: Apartment[];
  newApartments: Apartment[];
  topRated: Apartment[];
  totalCount: number;
  isLoading: boolean;
  isSearching: boolean;
  Keyword: string;
  ToPrice: number;
  FromPrice: number;
  Gender: number;
  capecity: number;
  LOCATION: number;
  find: boolean;
  setKeyword: (Keyword: string) => void;
  setToPrice: (price: number) => void;
  setFromPrice: (price: number) => void;
  setGender: (g: number) => void;
  setCapacity: (c: number) => void;
  setLocation: (l: number) => void;
  setIsSearching: (searching: boolean) => void;
  fetchByEveryThing: () => Promise<void>;
  fetchTopRated: () => Promise<void>;
  fetchNew: (pageSize: number) => Promise<void>;
}

const useApartmentData = create<ApartmentDataState>()(
  persist(
    (set, get) => ({
      apartments: [],
      newApartments: [],
      topRated: [],
      totalCount: 0,
      isLoading: false,
      isSearching: false,
      ToPrice: 0,
      FromPrice: 0,
      Gender: 0,
      capecity: 0,
      LOCATION: -1,
      Keyword: "",
      find: true,

      setKeyword: (keyword: string) => set({ Keyword: keyword }),
      setCapacity: (c: number) => set({ capecity: c }),
      setFromPrice: (f: number) => set({ FromPrice: f }),
      setToPrice: (t: number) => set({ ToPrice: t }),
      setGender: (g: number) => set({ Gender: g }),
      setLocation: (l: number) => set({ LOCATION: l }),
      setIsSearching: (searching) => set({ isSearching: searching }),

      fetchByEveryThing: async () => {
        try {
          set({ isLoading: true, isSearching: true });
          const state = get();

          const queryParams = new URLSearchParams();
          // let optionalFilterCount = 0;

          if (state.FromPrice > 0) {
            queryParams.append("FromPrice", state.FromPrice.toString());
            // optionalFilterCount++;
          }
          if (state.ToPrice > 0) {
            queryParams.append("ToPrice", state.ToPrice.toString());
            // optionalFilterCount++;
          }
          if (state.capecity > 0) {
            queryParams.append("Capecity", state.capecity.toString());
            // optionalFilterCount++;
          }
          if (state.LOCATION !== -1) {
            queryParams.append("Location", state.LOCATION.toString());
            // optionalFilterCount++;
          }
          if (state.Gender > 0) {
            queryParams.append("Gender", state.Gender.toString());
            // optionalFilterCount++;
          }

          // if (optionalFilterCount === 0) {
          //   toast.error("من فضلك اختر على الأقل فلتر واحد بجانب الكلمة المفتاحية.");
          //   return;
          // }

          const res = await axios.get(
            `https://darkteam.runasp.net/SearchForApartmentEndpoint/SearchForApartment?PageNumber=1&PageSize=22&Keyword=${state.Keyword.trim()}&${queryParams.toString()}`
          );

          console.log("Response from fetchByEveryThing:", res);
          console.log("All query params sent:", {
            Keyword: state.Keyword,
            FromPrice: state.FromPrice,
            ToPrice: state.ToPrice,
            Capecity: state.capecity,
            Location: state.LOCATION,
            Gender: state.Gender,
          });

          if (res.data.isSuccess !== true) {
            throw new Error("فشل في جلب البيانات");
          }

          const data = res.data.data;
          const apartmentsData = data.dtOs || [];

          set({
            apartments: apartmentsData,
            find: apartmentsData.length > 0,
           
          });

        } catch (error) {
          const state = get();
          console.error("Error fetching by everything:", error);
          console.log("Request parameters:", {
            Keyword: state.Keyword,
            FromPrice: state.FromPrice,
            ToPrice: state.ToPrice,
            Capecity: state.capecity,
            Location: state.LOCATION,
            Gender: state.Gender,
          });
        } finally {
          set({ isLoading: false });
        }
      },

      fetchTopRated: async () => {
        try {
          set({ isLoading: true });
          const res = await axios.get(`https://darkteam.runasp.net/GetApartmentEndpoint/GetApartment?PageNumber=1&PageSize=6`);
          set({ topRated: (res.data.data.apartments || []).reverse() });
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
            newApartments: (res.data.data.apartments || []).reverse(),
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
      partialize: (state) => ({
        apartments: state.apartments,
        newApartments: state.newApartments,
        topRated: state.topRated,
        totalCount: state.totalCount,
        isLoading: state.isLoading,
        isSearching: state.isSearching,
        find: state.find,
      }),
    }
  )
);

export default useApartmentData;
