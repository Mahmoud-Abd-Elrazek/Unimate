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
  setRole: (role: string) => void;
  setToken: (token: string) => void;
  login: (email: string, password: string) => Promise<void>;
  registerStudent: (data: User) => Promise<void>;
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

      setRole: (role: string) => set({ role }),
      setToken: (token: string) => set({ token }),

      login: async (email: string, password: string) => {
        try {
          const res = await axios.post(
            'https://darkteam.runasp.net/LogInUserEndpoint/LogInUser',
            { email, password }
          );
          set({ isAuthenticated: true, token: res.data.data.token, user: res.data.data.user });
          console.log(res)
          // console.log("Login successful. Token:", res.data.data.token);
        } catch (error) {
          console.error('Login failed:', error);
        }
      },

      registerStudent: async (data: User) => {
        try {
          if (data.password !== data.confrimPassword) {
            throw new Error("Passwords do not match");
          }
          const res = await axios.post(
            'https://darkteam.runasp.net/RegisterStudentEndPoint/RegisterStudent',
            { ...data }
          );
          set({
            isAuthenticated: false,
            token: res.data.token,
            user: res.data.user,
            role: "Student"
          });
          console.log("Student registered successfully.");
        } catch (error) {
          console.error('Student registration failed:', error);
        }
      },

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
            isAuthenticated: false, // أو true حسب سلوك الـ backend
            token: res.data.token,
            user: res.data.user,
            role: "Owner"
          });
          console.log("Owner registered successfully.");
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
      name: 'auth-storage', // اسم الـ localStorage key
      // getStorage: () => localStorage, // ممكن تغييره لـ sessionStorage لو حبيت
    }
  )
);

export default useAuthStore;
