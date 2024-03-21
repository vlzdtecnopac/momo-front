import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import InfoSidebar from "../../components/InfoSidebar/InfoSidebar";
import "./Layout.scss";
import axiosInstance from "../../helpers/axios-instance.helpers";
import { useShoppingStore } from "../../store/shopping.store";
import { useDesignStore } from "../../store/design.store";

interface DynamicLayoutProps {
  children: ReactNode;
}


const Layout: React.FC<DynamicLayoutProps> = (props) => {

  const navigate = useNavigate();
  const { data } = useShoppingStore();
  const { typeTypography, selectTypography, typeColumns, selectTypeColumn } =
  useDesignStore();
  
  useEffect(()=>{
    if(!localStorage.getItem('token-momo')){
      closeSession();
      navigate('/');
    }
    consultConfig();
  },[]);

  const consultConfig = async () => {
    const response =  await axiosInstance.get(`/config/?shopping_id=${data[0].shopping_id}`);
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
