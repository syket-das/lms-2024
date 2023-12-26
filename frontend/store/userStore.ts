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
    await axios
      .get(`${url}/api/v1/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        set({
          user: res.data.data,
          isAuthenticated: true,
        });
      })
      .catch((err) => {
        set({
          user: null,
          isAuthenticated: false,
        });
      });
  },

  removeUser: () =>
    set(
      {
        user: null,
        isAuthenticated: false,
      },
      true
    ),
}));
