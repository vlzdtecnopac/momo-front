import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import InfoSidebar from "../../components/InfoSidebar/InfoSidebar";
import "./Layout.scss";
import axiosInstance from "../../helpers/axios-instance.helpers";
import { useShoppingStore } from "../../store/shopping.store";
import { useDesignStore } from "../../store/design.store";
import { useEmployeeStore } from "../../store/employee.store";

interface DynamicLayoutProps {
  children: ReactNode;
}


const Layout: React.FC<DynamicLayoutProps> = (props) => {
  const { data, fetchData } = useShoppingStore();
  const navigate = useNavigate();
  const { fetchEmployeeData } = useEmployeeStore();
  const { typeTypography, selectTypography, typeColumns, selectTypeColumn } =
  useDesignStore();

  
  useEffect(() => {
    const fetchDataOnMount = async () => {
      const employeeId = localStorage.getItem("employee-id");
      if (employeeId) {
        fetchEmployeeData(employeeId).then(async(resp: any) => {
          let respEmp:any = await fetchData(resp[0].shopping_id)
          localStorage.setItem('shopping_id', respEmp[0].shopping_id)
          consultConfig(respEmp[0].shopping_id);
        });
      }
    };
    fetchDataOnMount();
  }, []);
  
  useEffect(()=>{
    if(!localStorage.getItem('token-momo')){
      closeSession();
      navigate('/');
    }
  },[]);

  const consultConfig = async (shopping_id: string) => {
    const response =  await axiosInstance.get(`/config/?shopping_id=${shopping_id}`);
    selectTypeColumn(response.data[0]?.type_column); 
    selectTypography(response.data[0]?.type_text);
   }
 

  const closeSession = ( ) => {
    localStorage.removeItem("employee-id");
    localStorage.removeItem("token-momo");
  }

  return (
    <>
      {(() => {
        if (localStorage.getItem('token-momo')) {
          return (<>
            <Header />
            <div className="grid-2 max-content">
              <div className="col-1_sm-1_md-1_lg-1 padding">
                <div className="sidebar margin">
                  <SideBar />
                </div>
              </div>
              <div className="col-11_sm-11_md-11_lg-11 padding-content">
                {props.children}
                <InfoSidebar />
              </div>
            </div>
          </>);
        }else{
          navigate("/")
        }
      })()}
    </>
  );
};

export default Layout;
