import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useAuthStore from '../Auth/Auth.store';
// import { toast } from 'react-toastify';
import axios from 'axios';
interface ProfileState {
    userName: string;
    email: string;
    img:File | undefined;
    password: string;
    phones: string;
    briefOverView:string;
    governomet: string;
    address: string;
    getOwnerInfo: () => void;
}

export const useprofileOwnerStore = create<ProfileState>()(
    persist(    
        (set)=>({
            userName: '',
            email: '',
            password: '',
            phones: '',
            briefOverView: '',
            governomet: '',
            address: '',
            img: undefined,
            getOwnerInfo: async () => {
                const token = useAuthStore.getState().token;
                const res = await axios.get("https://darkteam.runasp.net/GetOwnerEndpoint/GetOwner", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(await res)
                const data=res.data.data;
                set({
                    userName: data.username,
                    img:data.image,
                    phones: data.phones,
                    email: data.email,
                    briefOverView: data.briefOverView,
                    governomet: data.governomet,
                    address: data.address
                })
            }
        }),
        {
            name: "profile-owner-storage",
        }
    ))