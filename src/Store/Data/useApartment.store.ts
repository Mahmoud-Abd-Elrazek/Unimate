import { create } from "zustand";
import axios from "axios";
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
    // message:string;
    flag: boolean,
    // setflag:(flag:boolean)=>void
    AddFavorite: (id: string) => Promise<void>
    DeleteFavorite: (id: string) => Promise<void>
    GetFavApartment: () => Promise<void>
    ToggelFav: (id: number) => Promise<void>
}

export const useApartmentStore = create<ApartmentState>((set) => ({
    issuccess: true,
    aparments: [],
    flag: false,
    // setflag:  (flag: boolean) => {
    //     set({ flag });
    // },
    AddFavorite: async (id: string) => {
        try {

            const token = useAuthStore.getState().token;
            const res = axios.post("https://darkteam.runasp.net/AddFavoriteApartEndpoint/AddFavoriteApartment",
                {
                    id
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            console.log(res + " you add this apatment to favroutesssss")
            toast.success("تمت إضافة الشقة إلى المفضلة بنجاح");
        } catch (error) {
            toast.error("the add fav failed!!!!!!!!!!!!!!!!!!!!!!!1" + error);
            // console.log("the add fav failed!!!!!!!!!!!!!!!!!!!!!!!1" + error)
        }

    },
    DeleteFavorite: async (id: string) => {
        try {

            const token = useAuthStore.getState().token;
            const res = axios.post("https://darkteam.runasp.net/DelFavoriteApartEndpoint/DelFavoriteApartment",
                {
                    id
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            console.log(res + " you remove this apatment from favroutesssss")
        } catch (error) {
            console.log("the remove fav failed!!!!!!!!!!!!!!!!!!!!!!!1" + error)
        }

    },
    GetFavApartment: async () => {
        try {
            const token = useAuthStore.getState().token;
            const res = axios.get("https://darkteam.runasp.net/GetFavoritesEndpoint/GetFavorites",
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
