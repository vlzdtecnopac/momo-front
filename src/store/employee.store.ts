import { create } from 'zustand'
import axios from 'axios';

const headers = {
    'x-token': `${localStorage.getItem('token-momo')}`,
    'Content-Type': 'application/json', // Adjust content type as needed
  };

interface EmployeeInterface{
  id: number,
  employee_id: string,
  shopping_id: string,
  kiosko_id: string,
  first_name: string,
  last_name: string,
  phone: string,
  email: string,
  password: string,
  create_at: Date,
  update_at: Date,
}

interface EmployeeStoreInterface{
    dataEmployee: EmployeeInterface[],
    fetchEmployeeData: (shopping_id: string) => Promise<Boolean>
}

export const useEmployeeStore = create<EmployeeStoreInterface>((set) => ({
  dataEmployee: [],
  fetchEmployeeData: async (employee_id) =>  new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/users/employee/?employee_id=${employee_id}`, { headers })
        .then((response) => {
          set({ dataEmployee: response.data });
          resolve(true); 
        })
        .catch((error) => {
          console.error(`Error fetching data: ${error}`);
          reject(false);
        });
    })
}));
