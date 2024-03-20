import React, { ReactNode, useEffect } from "react";
import moment from "moment";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import InfoSidebar from "../../components/InfoSidebar/InfoSidebar";
import "./Layout.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { tokenHeader } from "../../helpers/token-header.helper";

interface DynamicLayoutProps {
  children: ReactNode;
}


const Layout: React.FC<DynamicLayoutProps> = (props) => {
  const navigate = useNavigate();

  useEffect(()=>{
    let start_session = localStorage.getItem("start_session");
    if(start_session != undefined){
      let currentTime =  moment();
      if (currentTime.diff(start_session, 'hours') >= 1) {
        renewToken(currentTime);
      }
    }

    if(!localStorage.getItem('token-momo')){
      closeSession();
      navigate('/');
    }
  },[]);

  const renewToken = async (currentTime: any) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/update_token`,{
      "id": "42b725d5-314e-4d07-9f82-8b56ac1a3843"
  });
   localStorage.setItem("start_session", currentTime.format('YYYY/MM/DD, h:mm:ss a'));
   localStorage.setItem('token-momo', response.data.token);
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
