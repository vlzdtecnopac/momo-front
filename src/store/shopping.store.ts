import { create } from 'zustand'
import axios from 'axios';

const headers = {
    'x-token': `${localStorage.getItem('token-momo')}`,
    'Content-Type': 'application/json', // Adjust content type as needed
  };

interface DesignStoreInterface{
    data: any,
    fetchData: (shopping_id: string) => void
}

export const useShoppingStore = create<DesignStoreInterface>((set) => ({
  data: null,
  fetchData: async (shopping_id) => {
    try {
      const response = await axios.get(`http://localhost:3000/shopping/?shopping_id=${shopping_id}`, {headers});
      set({ data: response.data });
      return;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  },
}));
