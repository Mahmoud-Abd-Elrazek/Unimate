import { create } from "zustand";
import axios from "axios";
// import { string } from "zod";

interface User
{
  fname:string,
  lname:string,
  username:string,
  password:number,
  confrimPassword:number,
  email:string,
  nationalID:string,
  role: "طالب" | "صاحب سكن"; 
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (user: string, token: string) => Promise<void>;
  register:(data:User&{password:string})=>Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  login: async (email, password) => {
    try {
      const res = await axios.post(
        'http://{{baseUrl}}/LogInUserEndpoint/LogInUser',
        { email, password }
      );
      set({ isAuthenticated: true, token: res.data.token, user: res.data.user });
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  },

  register: async (data) => {
    try {
      const res = await axios.post(
        'http://localhost:5173/RegisterUserEndpoint/RegisterUser',
        data
      );
      set({ isAuthenticated: true, token: res.data.token, user: res.data.user });
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  },

  logout: () => {
    set({ isAuthenticated: false, user: null, token: null });
    localStorage.removeItem('token');
  },
}));
export default useAuthStore;