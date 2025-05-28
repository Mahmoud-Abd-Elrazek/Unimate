import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import useAuthStore from "../Auth/Auth.store";

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
  country: string;
  phones: string;
  img: File | undefined;
  GetStudentInfo: () => void;
  DisplayUpdatedStudentinfo: () => void;
  DisplayAcadmic: () => void;
  UPdateStudentProfile: (
    fname: string,
    lname: string,
    governorate: string,
    address: string,
    briefOverView: string
  ) => Promise<void>;
  AddAcadmicInfo: (
    university: string,
    department: string,
    faculty: string,
    academicYear: string,
    karnihImage: string
  ) => Promise<void>;
}

const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
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
      country: "",
      phones: "",
      img: undefined,

      GetStudentInfo: () => {
        const token = useAuthStore.getState().token;
        axios
          .get("https://darkteam.runasp.net/GetStudentEndpoint/GetStudent", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const res = response.data.data;
            console.log(res + "this is the res of getstudent info")
            set({
              userName: res.fullName,
              // "image": null,
              nationalId: res.national_Id,
              university: res.university,
              faculty: res.faculty,
              // "phones": [],
              briefOverView: res.briefOverView,
              address: res.address,
              email: res.email
            });
          });
      },
      UPdateStudentProfile: async (
      Firstname,
        lastname,
        Governorate,
        Address,
        BriefOverView
      ) => {
        const token = useAuthStore.getState().token;
        try {
         const res= await axios.post(
            "https://darkteam.runasp.net/UpdateProfileSaveEndpoint/UpdateProfileSave",
            {
              firstName: Firstname,
              lastName: lastname,
              governorate: Governorate,
              address: Address,
              briefOverView: BriefOverView,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          set({
            fname: Firstname,
            lname: lastname,
            governorate: Governorate,
            address: Address,
            briefOverView: BriefOverView,
          });
          console.log("updated successfully !!", res);
        } catch (error) {
          console.log("update failed", error);
        }
      },
      DisplayUpdatedStudentinfo: async () => {
      
        try {        const token = useAuthStore.getState().token;
       const res= axios.get("https://darkteam.runasp.net/UpdateProfileDisplayEndpoint/UpdateProfileDisplay", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        const data= (await res).data.data;
      set({
        fname: data.firstName,
        lname: data.lastName,
        governorate: data.governorate,
        address: data.address,
        briefOverView: data.briefOverView,
      })
        console.log("display updated student info", data);
      } catch (error) {
          console.log("failed to display updated student info", error);
        }
      },
      AddAcadmicInfo: async (
        University,
        Department,
        Faculty,
        AcademicYear,
        KarnihImage
      ) => {
        try {
          axios
            .post(
              "https://darkteam.runasp.net/AcademicInfoSaveEndpoint/UpdateAcademicInfo",
              {
                University,
                Faculty,
                AcademicYear,
                Department,
                KarnihImage,
              }
            )
            .then((res) => console.log("update sucess!!", res));
          set({
            university: University,
            faculty: Faculty,
            academicYear: AcademicYear,
            department: Department,
            karnihImage: KarnihImage,
          });
        } catch (error) {
          console.log("failed", error);
        }
      },
      DisplayAcadmic: async () => {
        try {
          const token = useAuthStore.getState().token;
          axios
            .get(
              "https://darkteam.runasp.net/AcademicInfoDisplayEndpoint/AcademicInfoDisplay",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((response) => {
              const res = response.data;
              set({
                university: res.university,
                faculty: res.faculty,
                academicYear: res.academicYear,
                department: res.department,
                karnihImage: res.karnihImage,
              });
            });
        } catch (error) {
          console.log("this is an error in get acadmic info", error);
        }
      },
    }),
    {
      name: "profile-storage",
      partialize: (state) => {
        
        const {
          fname,
          lname,
          userName,
          email,
          password,
          confrimPassword,
          nationalId,
          governorate,
          address,
          briefOverView,
          university,
          faculty,
          academicYear,
          department,
          karnihImage,
          country,
          phones,
          img, 
        } = state;
        return {
          fname,
          lname,
          userName,
          email,
          password,
          confrimPassword,
          nationalId,
          governorate,
          address,
          briefOverView,
          university,
          faculty,
          academicYear,
          department,
          karnihImage,
          country,
          phones,
          img
        };
      },
    }
  )
);

export default useProfileStore;