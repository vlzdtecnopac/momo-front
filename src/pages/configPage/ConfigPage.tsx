import "./ConfigPage.scss";
import photo from "../../assets/login-img.jpg";
import ConfigTabs from "../../components/Tabs/ConfigTabs/ConfigTabs";
import Layout from "../../includes/layout/Layout";
import GeneralInfoForm from "../../components/GeneralInfoForm/GeneralInfoForm";
import ConnectedKioskos from "../../components/ConnectedKioskos/ConnectedKioskos";
import DisplayConfig from "../../components/DisplayConfig/DisplayConfig";
import { useState } from "react";

function ConfigPage() {
  const [postionTab, setPositionTab] = useState<number>(0);
  const handleClickTab = (resp: number) => setPositionTab(resp);
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ConfigPage;
