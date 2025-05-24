import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { toast } from 'react-toastify';

interface User {
  fname: string;
  lname: string;
  userName: string;
  password: string;
  email: string;
  confrimPassword: string;
  nationalId: string;

}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  role: string | null;
  phone: string;
  otp: string | null;
  photo1: File | null;
  photo2: File | null;
  iSSuccess: boolean;
  setPhoto1: (file: File) => void;
  setPhoto2: (file: File) => void;
  setRole: (role: string) => void;
  setToken: (token: string) => void;
  login: (email: string, password: string) => Promise<boolean>;
  // registerStudent: (formData:FormData) => Promise<void>;
  registerOwner: (firstname: string, lastname: string, email: string, password: string, phone: string) => Promise<void>;
  forgetpassword:(email:string)=>Promise<boolean>;
  changePassword: (OldPassword: string, NewPassword: string, ConfirmPassword: string) => Promise<void>;
  resetpassword: (email: string, password: string, confrimPassword: string, token: string) => Promise<void>;
  logout: () => void;
  confirmemail: (email: string, otp: string) => Promise<void>;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      role: null,
      phone: '',
      otp: null,
      photo1: null,
      photo2: null,
      iSSuccess: false,
      setPhoto1: (file: File) => set({ photo1: file }),
      setPhoto2: (file: File) => set({ photo1: file }),
      setRole: (role: string) => set({ role }),
      setToken: (token: string) => set({ token }),

      login: async (email, password) => {
        try {
          const res = await axios.post(
            'https://darkteam.runasp.net/LogInUserEndpoint/LogInUser',
            { email, password }
          );

          if (!res.data.isSuccess) {
            // toast.error(res.data.message);
            console.log("the is success not true!!!!!!!!!!!")
            set({ role: null });
            return false;
          } else {
            const token = res?.data?.data?.token;
            if (token) {
              set({ isAuthenticated: true, token });
              localStorage.setItem("token", token);
              return true;
            } else {
              toast.error("Login failed. Please try again.");
              return false;
            }
            return true;
          }
        } catch (error) {
          toast.error("Network error. Please try again." + error);
          return false;
        }
      },
      // registerStudent: async (formData:FormData) => {
      //   try {
         
      //     const res = await axios.post(
      //       'https://darkteam.runasp.net/RegisterStudentEndPoint/RegisterStudent',{formData},
      //       {
      //         headers:{
      //           "Content-Type": 'multipart/form-data',
      //         }
      //       }
      //     );
      //     set({
      //       isAuthenticated: false,
      //       token: res.data.data.token,
      //       user: res.data.data.user,
           
      //     });
      //       console.log("Student registered successfully.");
      //   } catch (error) {
      //     console.error('Student registration failed:', error);
      //   }
      // },

      registerOwner: async (firstname, lastname, email, password, phone) => {
        try {
          const res = await axios.post(
            'https://darkteam.runasp.net/RegisterOwnerEndPoint/RegisterOwner',
            {
              email,
              password,
              fName: firstname,
              lName: lastname,
              phoneNo: phone,
            }
          );
          set({
            isAuthenticated: false,
            token: res.data.token,
            user: res.data.user,
          });
          console.log("Owner registered successfully.");
          console.log(" فاث يشفش", res.data.data);
        } catch (error) {
          console.error('Owner registration failed:', error);
        }
      },
      forgetpassword:async(email:string)=>{
        try{
          const res= await axios.post("https://darkteam.runasp.net/ForgotPasswordEndpoint/ForgotPassword",{
            email:email
          })
          console.log(res)
          if (!res.data.isSuccess) {
            toast.error("There Is No Such Email")
            return false;
          } else {
            return true;
          }
        }catch(error){
          console.log("forgetpadd failed!!"+error)
          return false;
        }
      },
      resetpassword: async (email:string, otp:string, password:string, confirmPassword:string) => {
        try {
          const res = await axios.post("https://darkteam.runasp.net/ResetPasswordWithOutIdentityEndpoint/ResetPassword", {
            email,
            token:otp,
            password,
            confirmPassword
          });
          set({
            isAuthenticated: true,
            user: res.data.user,
            token: res.data.token,
            role: res.data.role
          });
          console.log("Password reset successful.");
        } catch (error) {
          console.error("Password reset failed:", error);
        }
      },
      changePassword: async (OldPassword: string, NewPassword: string, ConfirmPassword: string) => {
        try {
          const res = await axios.post("https://darkteam.runasp.net/ChangePasswordEndpoint/ChangePassword", {
            OldPassword,
            NewPassword,
            ConfirmPassword,
          },
        {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
          set({
            isAuthenticated: true,
            user: res.data.user,
            token: res.data.token,
            role: res.data.role
          });
          console.log("Password changed successfully.");
        } catch (error) {
          console.error("Password change failed:", error);
        }
      },

      confirmemail: async (email, otp) => {
        try {
          const res = await axios.get(`https://darkteam.runasp.net/ConfirmEmailEndpoint/ConfirmEmail?email=${email}&OTP=${otp}`);
          set({
            isAuthenticated: true,
            user: res.data.user,
            token: res.data.token,
            role: res.data.role
          });
          console.log("Email confirmed.");
        } catch (error) {
          console.error("Email confirmation failed:", error);
        }
      },
      

      logout: () => {
        set({
          isAuthenticated: false,
          user: null,
          token: null,
          role: null,
          phone: '',
          otp: null
        });
        localStorage.clear();
        console.log("Logged out.");
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;
