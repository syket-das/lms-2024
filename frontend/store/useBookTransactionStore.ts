import axios from 'axios';
import { create } from 'zustand';
const url = 'http://98.70.38.17:8000';

interface BookTransactionStore {
  bookTransactions: [];
  myBookTransactions: [];
  setBookTransactions: () => void;
  addBookTransaction: (data: any) => void;
  updateBookTransaction: (id: string, data: any) => void;
  myTransactions: () => void;
}

export const useBookTransactionStore = create<BookTransactionStore>((set) => ({
  bookTransactions: [],
  myBookTransactions: [],
  setBookTransactions: async () => {
    try {
      const { data } = await axios.get(`${url}/api/v1/bookTransaction`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      await set({
        bookTransactions: data.data || null,
      });
    } catch (error) {
      await set({
        bookTransactions: [],
      });
    }
  },

  addBookTransaction: async (data) => {
    try {
      const { data: response } = await axios.post(
        `${url}/api/v1/bookTransaction/add`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
    } catch (error) {
      await set({
        bookTransactions: [],
      });
    }
  },

  updateBookTransaction: async (id, data) => {
    try {
      const { data: response } = await axios.put(
        `${url}/api/v1/bookTransaction/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
    } catch (error) {
      await set({
        bookTransactions: [],
      });
    }
  },

  myTransactions: async () => {
    try {
      const { data } = await axios.get(`${url}/api/v1/bookTransaction/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      await set({
        myBookTransactions: data.data || [],
      });
    } catch (error) {
      await set({
        myBookTransactions: [],
      });
    }
  },
}));
