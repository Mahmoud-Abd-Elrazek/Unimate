import { create } from "zustand";
import axios from "axios";
import useAuthStore from "../Auth/Auth.store";
import { toast } from "react-toastify";


interface Apartment {
  apartmentId:number;
  imageUrl:string;
  title:string;
  description:string;
  descriptionLocation:string;
  isFavorite:boolean;
}
interface ApartmentState {
    issuccess:boolean;
    aparments: Apartment[],
    AddFavorite: (id: string) => Promise<void>
    DeleteFavorite: (id: string) => Promise<void>
    GetFavApartment:()=>Promise<void>
}

export const useApartmentStore = create<ApartmentState>((set) => ({
    issuccess:true,
    aparments:[],
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
            console.log("the add fav failed!!!!!!!!!!!!!!!!!!!!!!!1" + error)
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
    GetFavApartment:async()=>{
        try{
            const token=useAuthStore.getState().token;
            const res=axios.get("https://darkteam.runasp.net/GetFavoritesEndpoint/GetFavorites",
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            
            set({
                issuccess:(await res).data.isSussecc,
                aparments:(await res).data.data
                
            })
            console.log((await res).data.data)
        }catch(error){
            console.log("failed to get the data of favs",error)
        }
    }

}))
