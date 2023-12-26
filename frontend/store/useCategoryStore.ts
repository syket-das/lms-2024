import axios from 'axios';
import { create } from 'zustand';

const url = 'http://localhost:8000';

interface CategoryStore {
  categories: any;
  setCategories: () => void;
  removeCategories: () => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  setCategories: async () => {
    try {
      const { data } = await axios.get(`${url}/api/v1/category`);

      await set({
        categories: data.data || null,
      });
    } catch (error) {
      await set({
        categories: null,
      });
    }
  },

  removeCategories: () => set({}, true),
}));
