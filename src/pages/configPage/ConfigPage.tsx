import "./ConfigPage.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import photo from "../../assets/login-img.jpg";
import ConfigTabs from "../../components/Tabs/ConfigTabs/ConfigTabs";
import Layout from "../../includes/layout/Layout";
import GeneralInfoForm from "../../components/GeneralInfoForm/GeneralInfoForm";
import ConnectedKioskos from "../../components/ConnectedKioskos/ConnectedKioskos";
import DisplayConfig from "../../components/DisplayConfig/DisplayConfig";

function ConfigPage() {
  const [postionTab, setPositionTab] = useState<number>(0);
  const handleClickTab = (resp: number) => setPositionTab(resp);

  const fadeInOutVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Layout>
      <div className="config_page">
        <div className="bg-blue">
          <div className="header_blue"></div>
          <div className="header_white">
            <ConfigTabs onClick={(event) => handleClickTab(event)} />
          </div>
          <div className="header_info">
            <div className="grid-2_xs-1">
              <div className="col-2">
                <img className="profile-pic" src={photo} alt="photo" />
              </div>
              <div className="col-10">
                <h2 className="store">Tienda 1</h2>
                <p className="address">Dirección tienda</p>
              </div>
            </div>
          </div>
          <div className="conten_tabs">
            <div className="bg_content">
              <motion.div
                key={postionTab}
                initial="hidden"
                animate="visible"
                variants={fadeInOutVariants}
                transition={{ duration: 1 }} // Adjust the duration as needed
              >
                {(() => {
                  switch (postionTab) {
                    case 0:
                      return <GeneralInfoForm />;
                    case 1:
                      return <DisplayConfig />;
                    default:
                      return <ConnectedKioskos />;
                  }
                })()}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ConfigPage;
