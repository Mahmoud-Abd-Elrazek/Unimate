import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: null;
  token: string | null;
  login: (user: null, token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  login: (user, token) =>
    set(() => ({
      isAuthenticated: true,
      user: user,
      token: token,
    })),
  logout: () =>
    set(() => ({
      isAuthenticated: false,
      user: null,
      token: null,
    })),
}));

export default useAuthStore;