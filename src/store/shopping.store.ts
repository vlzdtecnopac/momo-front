import { create } from 'zustand'
import axios from 'axios';

const headers = {
    'x-token': `${localStorage.getItem('token-momo')}`,
    'Content-Type': 'application/json', // Adjust content type as needed
  };

interface DesignStoreInterface{
    data: any,
    fetchData: (shopping_id: string) => Promise<Boolean>
}

export const useShoppingStore = create<DesignStoreInterface>((set) => ({
  data: null,
  fetchData: async (shopping_id) =>  new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/shopping/?shopping_id=${shopping_id}`, { headers })
        .then((response) => {
          set({ data: response.data });
          resolve(true); // Resolvemos la promesa si la petición es exitosa
        })
        .catch((error) => {
          console.error(`Error fetching data: ${error}`);
          reject(false); // Rechazamos la promesa si hay un error
        });
    })
}));
