import axios from "axios";
import { create } from "zustand";

interface ProfileState {
  fname: string;
  lname: string;
  userName: string;
  email: string;
  password: string;
  confrimPassword:string;
  nationalId: string;
  ShowProfile: () => void;
}

const useProfileStore = create<ProfileState>((set) => ({
  fname: "omar",
  lname: "ahmed",
  userName: "omar123",
  email: "omar@example.com",
  password: "password",
  confrimPassword: "password",
  nationalId: "12345678901234",
    // show profile
  ShowProfile: () => {
    axios.get("https://darkteam.runasp.net/UpdateProfileDisplayEndpoint/UpdateProfileDisplay").then((response) => {
        const res = response.data;
        set({ fname: res.fname, lname: res.lname, userName: res.userName, email: res.email, password: res.password, confrimPassword: res.confrimPassword, nationalId: res.nationalId });
    }).catch((error) => {
        console.error("Error fetching profile data:", error);
    });
  },
    // update profile
    UpdateProfile:()=>{

    }
}));
export default useProfileStore;