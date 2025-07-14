import { create } from "zustand";
import axios, { AxiosResponse } from "axios";
import useAuthStore from "../Auth/Auth.store";
import { toast } from "sonner";


interface Apartment {
    apartmentId: number;
    imageUrl: string;
    title: string;
    description: string;
    descriptionLocation: string;
    isFavorite: boolean;
}
interface ApartmentState {
    issuccess: boolean;
    aparments: Apartment[],
    flag: boolean,
    AddFavorite: (id: number) => Promise<AxiosResponse>
    DeleteFavorite: (id: number) => Promise<AxiosResponse>
    GetFavApartment: () => Promise<void >
    ToggelFav: (id: number) => Promise<void>
}

export const useApartmentStore = create<ApartmentState>((set) => ({
    issuccess: true,
    aparments: [],
    flag: false,
    
    AddFavorite: async (id: number) => {
  try {
    const token = useAuthStore.getState().token;
    const res = await axios.post("https://darkteam.runasp.net/AddFavoriteApartEndpoint/AddFavoriteApartment",
      { id },
      {
        headers: { Authorization: `Bearer ${token}` }
      });

    // if (!res.data.isSuccess) {
    //   toast.error("Favorite Was Added Before");
    //   throw new Error("الشقه غير موجوده");
    // }

   
    set((state) => ({
      aparments: state.aparments.map(ap =>
        ap.apartmentId === id ? { ...ap, favourite: true } : ap
      )
    }));

    toast.success("تمت إضافة الشقة إلى المفضلة بنجاح");
    return res;
  } catch (error) {
    toast.error("فشل في إضافة الشقة للمفضلة: " + error);
    throw error;
  }
},

  DeleteFavorite: async (id: number) => {
  try {
    const token = useAuthStore.getState().token;
    const res = await axios.delete("https://darkteam.runasp.net/DelFavoriteApartEndpoint/DelFavoriteApartment",
      {
        headers: { Authorization: `Bearer ${token}` },
        data: { id }
      });

    if (res.data.isSuccess) {
     
      set((state) => ({
        aparments: state.aparments.map(ap =>
          ap.apartmentId === id ? { ...ap, favourite: false } : ap
        )
      }));

      toast.success("تمت إزالة الشقة من المفضلة بنجاح");
      return res;
    } else {
      toast.error("الشقه غير موجوده");
      throw new Error("الشقه غير موجوده");
    }
  } catch (error) {
    toast.error("فشل في إزالة الشقة من المفضلة: " + error);
    throw error;
  }
},

    GetFavApartment: async () => {
        try {
            const token = useAuthStore.getState().token;
            const res = await axios.get("https://darkteam.runasp.net/GetFavoritesEndpoint/GetFavorites",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            set({
                issuccess: (await res).data.isSussecc,
                aparments: (await res).data.data
            })
            console.log((await res).data.data)
        } catch (error) {
            console.log("failed to get the data of favs", error)
        }
    },

    ToggelFav: async (id: number) => {
        try {
            const res = await axios.post(
                "https://darkteam.runasp.net/ToggleFavoriteEndpoint/ToggleFavorite",
                { id },
                {
                    headers: {
                        Authorization: `Bearer ${useAuthStore.getState().token}`,
                    },
                }
            );

            const message = res.data.message;
            console.log("Toggle favorite response:", message);

            if (message === "The Apartment Added To Favorite") {
                set({ flag: true });
                toast.success(message)
            } else {
                set({ flag: false });
                toast.error(message)
            }

        } catch (error) {
            console.log("Failed to toggle the favs:", error);
        }
    }
}))
