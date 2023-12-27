import axios from 'axios';
import { create } from 'zustand';
const url = 'http://localhost:8000';

interface BookStore {
  books: any;
  setBooks: () => void;
  removeBooks: () => void;
  filterBooks: ({ category, name }: { category: any; name: string }) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  books: [],
  setBooks: async () => {
    try {
      const { data } = await axios.get(`${url}/api/v1/book`);

      await set({
        books: data.data || [],
      });
    } catch (error) {
      await set({
        books: [],
      });
    }
  },

  removeBooks: () => set({}, true),
  filterBooks: async ({ category, name }) => {
    try {
      const { data } = await axios.get(
        `${url}/api/v1/book?category=${category}&name=${name}`
      );

      await set({
        books: data.data || [],
      });
    } catch (error) {
      await set({
        books: [],
      });
    }
  },
}));
