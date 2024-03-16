import { useNavigate } from "react-router-dom";
import { create } from 'zustand'
import axios from 'axios';
import { tokenHeader } from '../helpers/token-header.helper';

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

const navigate = useNavigate();


export const useShoppingStore = create<DesignStoreInterface>((set) => ({
  data: [],
  fetchData: async (shopping_id) =>  new Promise((resolve, reject) => {
      axios.get(`${import.meta.env.VITE_API_URL}/shopping/?shopping_id=${shopping_id}`, {headers: tokenHeader})
        .then((response) => {
          set((state) => ({ ...state, data: response.data }));
          resolve(response.data);
        })
        .catch((error) => {
          if(error.response.data.message == 'jwt expired'){
            localStorage.removeItem("token-momo")
            navigate("/");
          }
          console.error(`Error fetching data: ${error}`);
          reject(false); 
        });
    })
}));
