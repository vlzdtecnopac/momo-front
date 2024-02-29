import { Link } from "react-router-dom";
import "./InfoSidebar.scss";
function InfoSidebar() {
  return (<div className="info-sidebar-component">
    <Link to="/full-alerts">
      <i className="icon icon-info"></i>
    </Link>
    <Link to="/full-screen">
      <i className="icon icon-fullscreen"></i>
    </Link>
  </div>);
}
export default InfoSidebar;
