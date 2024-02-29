import "./ConfigPage.scss";
import photo from "../../assets/login-img.jpg";
import ConfigTabs from "../../components/Tabs/ConfigTabs/ConfigTabs";
import Layout from "../../includes/layout/Layout";
import GeneralInfoForm from "../../components/GeneralInfoForm/GeneralInfoForm";
function ConfigPage() {
  return (
    <Layout>
      <div className="config_page">
        <div className="bg-blue">
        <div className="header_blue"></div>
        <div className="header_white">
            <ConfigTabs />
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
              <GeneralInfoForm />
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
}
export default ConfigPage;
