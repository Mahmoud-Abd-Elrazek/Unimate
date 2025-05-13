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
  otp:string|null;
  setRole:(role:string)=>void;
  login: (email: string, password: string) => Promise<void>;
  registerStudent:(data:User)=>Promise<void>;
  registerOwner:(firstname: string,lastname:string, email: string, password: string, phone: string) => Promise<void>;
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
  otp:null,
  phone: '',
  // register students
  registerStudent: async (data: User) => {
    try {
      if (data.password !== data.confrimPassword) {
        throw new Error("Passwords do not match");
      }
      const res = await axios.post(
        'https://darkteam.runasp.net/RegisterStudentEndPoint/RegisterStudent',
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
 registerOwner: async (firstname: string, lastname: string, email: string, password: string, phone: string) => {
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
      role: "Owner",
    });

    localStorage.setItem('token', res.data.token);
    localStorage.setItem('role', 'Owner');

    console.log("Role stored:", 'Owner');
  } catch (error) {
    console.error('Registration failed:', error);
  }
},

  

  login: async (email: string, password: string) => {
    try {
     

      const res = await axios.post(
        'https://darkteam.runasp.net/LogInUserEndpoint/LogInUser',
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
        const res=await axios.post("https://darkteam.runasp.net/ResetPasswordWithOutIdentityEndpoint/ResetPassword",(
          {email,password,confrimPassword,token}
        ))
        set({isAuthenticated:true,user:res.data.user,token:res.data.token,role:res.data.role})
        console.log(res.data)
    }catch(error){
        console.log("there is an error in reset Password"+error)
    }

  },
  // ti's not use
  confirmemail: async (email: string,otp:string) => {
    try{
      const res=await axios.get(`https://darkteam.runasp.net/ConfirmEmailEndpoint/ConfirmEmail?email=${email}&OTP=${otp}`)
      set({isAuthenticated:true,user:res.data.user,token:res.data.token,role:res.data.role})
      console.log(res.data)
    }catch(error){
        console.log("there is an error in confirm email"+error)
    }
  }
}));
export default useAuthStore;