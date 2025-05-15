import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

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
  setPhoto1: (file: File) => void;
  setPhoto2: (file: File) => void;
  setRole: (role: string) => void;
  setToken: (token: string) => void;
  login: (email: string, password: string) => Promise<void>;
  // registerStudent: (Email:string,Password:string,Fname:string,Lname:string,Username:string,NationalId:string,confrimPassword:string,photo1:File,photo2:File) => Promise<void>;
  registerOwner: (firstname: string, lastname: string, email: string, password: string, phone: string) => Promise<void>;
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
      setPhoto1: (file: File) => set({ photo1: file }),
      setPhoto2: (file: File) => set({ photo1: file }),
      setRole: (role: string) => set({ role }),
      setToken: (token: string) => set({ token }),

      login: async (email: string, password: string) => {
        try {
          const res = await axios.post(
            'https://darkteam.runasp.net/LogInUserEndpoint/LogInUser',
            { email, password }
          );

          const token = res?.data?.data?.token;
          const user = res?.data?.data?.user;

          if (token && user) {
            set({ isAuthenticated: true, token, user });
            console.log("Login successful. Token:", token);
            console.log("Full response data:", res.data);

          } else {
            console.error("Login failed: token or user not found in response", res.data);
          }
        } catch (error) {
          console.error('Login failed:', error);
        }
      },


      // registerStudent: async (Email:string,Password:string,Fname:string,Lname:string,Username:string,NationalId:string,confrimPassword:string,Frontimg:File,Backimg:File) => {
      //   try {
      //     if (Password !== confrimPassword) {
      //       throw new Error("Passwords do not match");
      //     }
      //     const res = await axios.post(
      //       'https://darkteam.runasp.net/RegisterStudentEndPoint/RegisterStudent',
      //       { 
      //        headers:{

      //        }
      //        }
      //     );
      //     set({
      //       isAuthenticated: false,
      //       token: res.data.data.token,
      //       user: res.data.data.user,
      //       role: "Student",
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
            role: "Owner"
          });
          console.log("Owner registered successfully.");
          console.log(" فاث يشفش", res.data.data);
        } catch (error) {
          console.error('Owner registration failed:', error);
        }
      },

      resetpassword: async (email, password, confrimPassword, token) => {
        try {
          const res = await axios.post("https://darkteam.runasp.net/ResetPasswordWithOutIdentityEndpoint/ResetPassword", {
            email,
            password,
            confrimPassword,
            token
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
        localStorage.removeItem('auth-storage')
        localStorage.removeItem('role')
        console.log("Logged out.");
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;
