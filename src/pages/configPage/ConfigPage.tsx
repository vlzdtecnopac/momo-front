import "./ConfigPage.scss";
import photo from "../../assets/login-img.jpg";
import ConfigTabs from "../../components/Tabs/ConfigTabs/ConfigTabs";
import Layout from "../../includes/layout/Layout";
function ConfigPage() {
  return (
    <Layout>
      <div className="config-page">
        <div className="config">
          <div className="top dual-color-bg ">
            <div className="config-header-content">
              <img
                className="profile-pic"
                src={photo}
                alt="photo"
              />

              <h2 className="store">Tienda 1</h2>
              <p className="address">Calle 1 #1-1</p>
            </div>
            <div className="bottom">
              <ConfigTabs />
            </div>
          </div>
        </div>
        <div className="config-options">{/* General Info form */}</div>
      </div>
    </Layout>
  );
}
export default ConfigPage;
