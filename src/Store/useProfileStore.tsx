import axios from "axios";
import { create } from "zustand";
import useAuthStore from "./useAuthStore";

interface ProfileState {
  fname: string;
  lname: string;
  userName: string;
  email: string;
  password: string;
  confrimPassword: string;
  nationalId: string;
  governorate: string;
  address: string;
  briefOverView: string;
  university: string;
  faculty: string;
  academicYear: string;
  department: string;
  karnihImage: string;
  country:string;
  DisplayStudentinfo: () => void;
  UPdateStudentProfile: (fname: string, lname: string, governorate: string, address: string, briefOverView: string) => Promise<void>
  AddAcadmicInfo:(university:string,faculty:string,academicYear:string,department:string,karnihImage:string)=>Promise<void>
}

const useProfileStore = create<ProfileState>((set) => ({
  fname: "",
  lname: "",
  userName: "",
  email: "",
  password: "",
  confrimPassword: "",
  nationalId: "",
  governorate: "",
  address: "",
  briefOverView: "",
  university: "",
  faculty: "",
  academicYear: "",
  department: "",
  karnihImage: "",
  country:"",
  // show profile
  DisplayStudentinfo: () => {
    const token=useAuthStore.getState().token;
    console.log("Token used in Info Page:", token);
    axios.get("https://darkteam.runasp.net/GetStudentEndpoint/GetStudent",
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
        
      }
    ).then((response) => {
      const res = response.data;
      set({ fname: res.fname, lname: res.lname, userName: res.userName, email: res.email, password: res.password, confrimPassword: res.confrimPassword, nationalId: res.nationalId });
    }).catch((error) => {
      console.error("Error fetching profile data:", error);
    });
  },
  // update profile
  UPdateStudentProfile: async (firstname: string, lastname: string, Governorate: string, Address: string, BriefOverView: string): Promise<void> => {
    const token=useAuthStore.getState().token;
    console.log("Token used in Info Page:", token);
    try {
      await axios.post("https://darkteam.runasp.net/UpdateProfileSaveEndpoint/UpdateProfileSave", {
        firstName:firstname, lastName:lastname, governorate: Governorate, address:Address,briefOverView: BriefOverView
      },{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      set({ fname: firstname, lname: lastname, governorate: Governorate, address: Address, briefOverView: BriefOverView, });
      console.log("updated successfully !!");
    } catch (error) {
      console.log("update failed", error);
    }
  },
  // add the acadmic info
  AddAcadmicInfo: async (University: string, Faculty: string, AcademicYear: string, Department: string, KarnihImage: string) => {
    try {
      axios.post("https://darkteam.runasp.net/AcademicInfoSaveEndpoint/UpdateAcademicInfo",
        {
          University,
          Faculty,
          AcademicYear,
          Department,
          KarnihImage
        }
      ).then(res=>console.log("update sucess!!",res))
      set({
        university: University,
        faculty: Faculty,
        academicYear: AcademicYear,
        department: Department,
        karnihImage: KarnihImage,
      })
    } catch (error) {
      console.log("failed", error);
    }
  },
  //get acadmic info
  DisplayAcadmic:async()=>{
    // check if this is the way of returned info 
    axios.get("https://darkteam.runasp.net/AcademicInfoDisplayEndpoint/AcademicInfoDisplay").then((response)=>{
      const res=response.data;
      set({
        university: res.university,
        faculty: res.faculty,
        academicYear: res.academicYear,
        department: res.department,
        karnihImage: res.karnihImage,
      })
    })
    
  }

}));
export default useProfileStore;