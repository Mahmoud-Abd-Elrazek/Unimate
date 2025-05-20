import { create } from "zustand";
import axios from "axios";
import useAuthStore from "../Auth/Auth.store";

// interface Apartment {
//     // images: string[];
//     address: string;
//     detailedAddress: null,
//     gender: string,
//     facilities: [],
//     floor: string,
//     ownerName: string,
//     numberOfRooms: number,
//     price: number,
//     favourite: null
// }
interface ApartmentState {
    // apartments: Apartment[];
    // numofpage: number;
    // pagesize:number;
    AddFavorite:()=>Promise<void>
}

export const useApartmentStore = create<ApartmentState>(() => ({

    AddFavorite:async()=>{
        try{

            const token=useAuthStore.getState().token;
            const res=axios.post("https://darkteam.runasp.net//AddFavoriteApartEndpoint/AddFavoriteApartment",{},{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(res)
        }catch(error){
            console.log("the add fav failed!!!!!!!!!!!!!!!!!!!!!!!1"+error)
        }
        
    }

}))
