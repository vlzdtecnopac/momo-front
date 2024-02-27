import "./ConfigPage.scss";
import photo from "../../assets/login-img.jpg";
import Tabs from "../../components/Tabs/Tabs";
function ConfigPage() {
  return (
    <div className="config-page">
      <div className="config">
        <div className="top dual-color-bg ">
          <div className="content">
            <img
              className="profile-pic"
              src={photo}
              alt="photo"
            />

            <h2 className="store">Tienda 1</h2>
            <p className="address">Calle 1 #1-1</p>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}
export default ConfigPage;
