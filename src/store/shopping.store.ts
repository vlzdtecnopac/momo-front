import { create } from 'zustand'
import axios from 'axios';

const headers = {
    'x-token': `${localStorage.getItem('token-momo')}`,
    'Content-Type': 'application/json', // Adjust content type as needed
  };

interface ShoppingInterface{
  id: number,
  shopping_id: string,
  name_shopping: string,
  no_shooping: string,
  address: string,
  email: string,
  idenfication: string,
  phone: string,
  closing: any,
  open: any,
  create_at: string,
}

interface DesignStoreInterface{
    data: ShoppingInterface[],
    fetchData: (shopping_id: string) => Promise<Boolean>
}

export const useShoppingStore = create<DesignStoreInterface>((set) => ({
  data: [],
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
