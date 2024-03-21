import { create } from 'zustand'
import axiosInstance from '../helpers/axios-instance.helpers';

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
      axiosInstance.get(`/shopping/?shopping_id=${shopping_id}`)
        .then((response) => {
          set((state) => ({ ...state, data: response.data }));
          resolve(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching data: ${error}`);
          reject(false); 
        });
    })
}));
