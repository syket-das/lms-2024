import axios from 'axios';
import { create } from 'zustand';
const url = 'http://localhost:8000';

interface UserStore {
  user: any;
  isAuthenticated: boolean;
  setUser: () => void;
  removeUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: async () => {
    try {
      const { data } = await axios.get(`${url}/api/v1/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      await set({
        user: data || null,
        isAuthenticated: data?.id ? true : false,
      });
    } catch (error) {
      await set({
        user: null,
        isAuthenticated: false,
      });
    }
  },

  removeUser: () => set({}, true),
}));
