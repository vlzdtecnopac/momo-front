import "./ConfigPage.scss";
import photo from "../../assets/login-img.jpg";
import ConfigTabs from "../../components/Tabs/ConfigTabs/ConfigTabs";
import Layout from "../../includes/layout/Layout";
import GeneralInfoForm from "../../components/GeneralInfoForm/GeneralInfoForm";
function ConfigPage() {
  return (
    <Layout>
      <div className="config_page">
        <div className="header_blue"></div>
        <div className="grid-2_xs-1">
          <div className="col-2">
            <img className="profile-pic" src={photo} alt="photo" />
          </div>
          <div className="col">
            <h2 className="store">Tienda 1</h2>
            <p className="address">Calle 1 #1-1</p>
          </div>
        </div>
        <ConfigTabs />
        <GeneralInfoForm />
      </div>
    </Layout>
  );
}
export default ConfigPage;
