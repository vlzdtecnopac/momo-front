import "./ConectedPage.scss";
import {  useEffect, useState } from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logo.svg";
import checkIcon from "../../assets/icons/check.svg";
import { useDesignStore } from "../../store/design.store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const headers = {
  'x-token': `${localStorage.getItem('token-momo')}`,
  'Content-Type': 'application/json', // Adjust content type as needed
};

function ConectedPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(0);
  const { typeTypography } = useDesignStore();

  useEffect(() => {
    consultNumberKiosko();
  }, []);


  const consultNumberKiosko = async ()=>{
    const response = await axios.get(`http://localhost:3000/kioskos/?shopping_id=${localStorage.getItem("store-momo")}&state=true`, {headers});
    setCount(response.data.length);
    if(response.data.length > 0){
     setTimeout(()=>  navigate("/dashboard"), 4000);
    } 
  }

  return (
    <div className="success_fully">
      <div className="container">
        <div className="center">
          <img className="logo" src={logo} alt="logo" />
          <h2 className={`success ${typeTypography}-text`}>Felicidades</h2>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <img className="check" src={checkIcon} alt="check-icon" />
          </motion.div>
          <h2 className={`text ${typeTypography}-text`}>
            <span className="space">{count} kioskos Conectados.</span> <br />
            <span className="light-text">
              Estamos listos para brindar la mejor experiencia en
            </span>
            <br />
            MOMO.
          </h2>
        </div>
      </div>
    </div>
  );
}
export default ConectedPage;
