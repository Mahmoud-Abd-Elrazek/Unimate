import { create } from "zustand";
import axios from "axios";
// import { string } from "zod";

interface User
{
  fname:string,
  lname:string,
  userName:string,
  password:string,
  email:string,
  confrimPassword:string,
  nationalId:string,
  // role: "طالب" | "صاحب سكن"; 
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  role: string | null;
  setRole:(role:string)=>void;
  login: (email: string, password: string) => Promise<void>;
  register:(data:User&{password:string})=>Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  role: null,
  setRole: (role: string) => set({ role }),
  isAuthenticated: false,
  user: null,
  token: null,
  register: async (data: User) => {
    try {
      if (data.password !== data.confrimPassword) {
        throw new Error("Passwords do not match");
      }
      const res = await axios.post(
        'http://darkteam.runasp.net/RegisterStudentEndPoint/RegisterStudent',
        { ...data }
      );
      set({ isAuthenticated: true, token: res.data.token, user: res.data.user });
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  },
  login: async (email: string, password: string) => {
    try {
      const currentRole = useAuthStore.getState().role;
      if (!currentRole) {
        throw new Error("Role is not set. Please select a role before logging in.");
      }

      const res = await axios.post(
        'http://darkteam.runasp.net/LogInUserEndpoint/LogInUser',
        { email, password }
      );
      set({ isAuthenticated: true, token: res.data.token, user: res.data.user, role: currentRole });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', currentRole);
    } catch (error) {
      console.error('Login failed:', error);
    }
  },
  logout: () => {
    set({ isAuthenticated: false, user: null, token: null, role: null });
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  },
}));
export default useAuthStore;