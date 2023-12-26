import { updateBook } from './../../backend/src/api/book/book.services';
import axios from 'axios';
import { create } from 'zustand';
const url = 'http://localhost:8000';

interface BookTransactionStore {
  bookTransactions: [];
  setBookTransactions: () => void;
  addBookTransaction: (data: any) => void;
  updateBookTransaction: (id: string, data: any) => void;
}

export const useBookTransactionStore = create<BookTransactionStore>((set) => ({
  bookTransactions: [],
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

      console.log(response);
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
}));
