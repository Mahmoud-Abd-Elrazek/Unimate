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
  phone :string;
  setRole:(role:string)=>void;
  login: (email: string, password: string) => Promise<void>;
  registerStudent:(data:User)=>Promise<void>;
  registerOwner:(username: string, email: string, password: string, phone: string) => Promise<void>;
  resetpassword:(email:string,password:string,confrimPassword:string,token:string)=>Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  role: null,
  setRole: (role: string) => set({ role }),
  isAuthenticated: false,
  user: null,
  token: null,
  phonen: null,
  phone: '',
  // register students
  registerStudent: async (data: User) => {
    try {
      if (data.password !== data.confrimPassword) {
        throw new Error("Passwords do not match");
      }
      const res = await axios.post(
        'http://darkteam.runasp.net/RegisterStudentEndPoint/RegisterStudent',
        { ...data }
      );
      set({ isAuthenticated: true, token: res.data.token, user: res.data.user, role: "Student" });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', useAuthStore.getState().role ?? '');
      console.log(useAuthStore.getState().role)
    } catch (error) {
      console.error('Registration failed:', error);
    }
  },
  // register owner
  registerOwner: async (username: string, email: string, password: string, phone: string) => {
    try {
      const res = await axios.post(
        'http://darkteam.runasp.net/RegisterOwnerEndPoint/RegisterOwner',
        { username, email, password, phone }
      );
      set({ isAuthenticated: true, token: res.data.token, user: res.data.user, role: "Owner" });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', useAuthStore.getState().role ?? '');
      console.log(useAuthStore.getState().role)
    } catch (error) {
      console.error('Registration failed:', error);
    }
  },

  login: async (email: string, password: string) => {
    try {
     

      const res = await axios.post(
        'http://darkteam.runasp.net/LogInUserEndpoint/LogInUser',
        { email, password }
      );
      set({ isAuthenticated: true, token: res.data.token, user: res.data.user });
      localStorage.setItem('token', res.data.token);
      console.log("this is res is "+ res)
      // localStorage.setItem('role',res.data.token.role);
    } catch (error) {
      console.error('Login failed:', error);
    }
  },
  logout: () => {
    set({ isAuthenticated: false, user: null, token: null, role: null });
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  },
  resetpassword: async (email: string,password:string ,confrimPassword:string,token:string) => {

    try{
        const res=await axios.post("http://darkteam.runasp.net/ResetPasswordWithOutIdentityEndpoint/ResetPassword",(
          {email,password,confrimPassword,token}
        ))
        set({isAuthenticated:true,user:res.data.user,token:res.data.token,role:res.data.role})
        console.log(res.data)
    }catch(error){
        console.log("there is an error in reset Password"+error)
    }

  }
}));
export default useAuthStore;