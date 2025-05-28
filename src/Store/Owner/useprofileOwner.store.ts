import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useAuthStore from '../Auth/Auth.store';
// import { toast } from 'react-toastify';
import axios from 'axios';
// import { devtools } from "zustand/middleware";

interface ProfileState {
    fname: string;
    lname: string;
    userName: string;
    email: string;
    facebookurl:string;
    whatsappurl:string;
    img:File | undefined;
    password: string;
    phones: string;
    anthorphone: string;
    briefOverView:string;
    governomet: string;
    address: string;
    getOwnerInfo: () => void;
    DisplayUpdatedOwnerInfo: () => void;
    UPdateOwnerProfile: (
        Fname: string,
        Lname: string,
        Governomet: string,
        Address: string,
        BriefOverView: string
    ) => Promise<void>;
    UPdateOwnerSocialInfo: (
        Phones: string,
        AnthorPhone: string,
        Whatsappurl:string,
        Facebookurl:string,
    ) => Promise<void>;
}

export const useprofileOwnerStore = create<ProfileState>()(
    persist(
        (set) => ({
            userName: '',
            fname: '',
            lname: '',
            email: '',
            facebookurl: '',
            whatsappurl: '',
            password: '',
            phones: '',
            anthorphone: '',
            briefOverView: '',
            governomet: '',
            address: '',
            img: undefined,
            // Fetch the owner information
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
            },
            // Display the updated owner information
            DisplayUpdatedOwnerInfo:async () => {
                const token = useAuthStore.getState().token;
                const res = await axios.get("https://darkteam.runasp.net/GetOwnerEndpoint/GetOwner", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data = res.data.data;
            set({
               fname: data.firstName,
                lname: data.lastName,
                governomet: data.governorate,
                address: data.address,
                briefOverView: data.briefOverView,
            })},
            // update the profile of the owner
            UPdateOwnerProfile: async (
                Fname: string,
                Lname: string,
                Governomet: string,
                Address: string,
                BriefOverView: string
            ) => {
                try {
                    const token = useAuthStore.getState().token;
                    const response = await axios.post(
                        "https://darkteam.runasp.net/UpdateProfileSaveEndpoint/UpdateProfileSave",
                        {
                            firstName: Fname,
                            lastName: Lname,
                            governorate: Governomet,
                            address: Address,
                            briefOverView: BriefOverView
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    );
                    set({
                        fname: Fname,
                        lname: Lname,
                        governomet: Governomet,
                        address: Address,
                        briefOverView: BriefOverView
                    });
                    console.log("Profile updated successfully:", response.data);
                    // toast.success("Profile updated successfully");
                } catch (error) {
                    console.error("Error updating owner profile:", error);
                    // toast.error("Failed to update profile");
                }
            },
           
            // update the social info of owner
            UPdateOwnerSocialInfo: async (
                Phones: string,
                AnthorPhone: string,
                Whatsappurl:string,
                Facebookurl:string,
            ) => {
                try {
                    const token = useAuthStore.getState().token;
                  
                    const response = await axios.post(
                        "https://darkteam.runasp.net/ConnectionInfoSaveEndpoint/ConnectionSave",
                        {
                            phoneNum: Phones,
                            anotherPhoneNum: AnthorPhone,
                            whatAppLink:Whatsappurl,
                            faceBookLink:Facebookurl
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    );
                    set({
                        phones: Phones,
                        anthorphone: AnthorPhone,
                        whatsappurl: Whatsappurl,
                        facebookurl: Facebookurl
                    })
                    console.log("Social info updated successfully:", response.data);
                    // toast.success("Social info updated successfully");
                } catch (error) {
                    console.error("Error updating owner social info:", error);
                    // toast.error("Failed to update social info");
                }
            },
            // get the social info of owner
            getOwnerSocialInfo: async () => {
                try {
                    const token = useAuthStore.getState().token;
                    const res = await axios.get("https://darkteam.runasp.net/ConnectionInfoDisplayEndpoint/ConnectionInfoDisplay", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    const data = res.data.data;
                    set({
                        phones: data.phoneNum,
                        anthorphone: data.anotherPhoneNum,
                        whatsappurl: data.whatAppLink,
                        facebookurl: data.faceBookLink
                    })
                } catch (error) {
                    console.error("Error fetching owner social info:", error);
                }
            }

        }),

        {
            name: "profile-owner-storage",
        }
    )
)