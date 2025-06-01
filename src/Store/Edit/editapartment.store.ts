// import axios from 'axios'
// import {create} from 'zustand'
// import { persist } from 'zustand/middleware'
// import useAuthStore from '../Auth/Auth.store'

// export const EditApartmentStore = create(
//   persist(
//     (set) => ({
//      DisplayUPdatedInfo:async(id)=>{
//         try{
//             const res=axios.get(`https://darkteam.runasp.net/UpdateApartmentInfoDisplayEndpoint/GetApartmentInfoDisplay?id=${id}`,
//                 {
//                     headers:{
//                         Authorization:`Bearer ${useAuthStore.getState().token}`
//                     }
//                 }
//             )
//             const data=(await res).data.data;
//             set({

//             })

//         }catch(error){
//             console.log("failed to get the data for update the info",error)
//         }
//      }
//     }),
//     {
//       name: 'edit-apartment-store', // unique name for storage
//     }
//   )
// )