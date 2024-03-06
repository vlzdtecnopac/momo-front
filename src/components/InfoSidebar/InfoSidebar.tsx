import { Link, Location } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./InfoSidebar.scss";
import { alertPageRuta, configPageRuta } from "../../routes/Router";

function InfoSidebar() {
  const location: Location<any> = useLocation();
  console.log('Ruta actual:', location.pathname);



  return (
  <>
   {(() => {
        if (location.pathname == alertPageRuta) {
            return (
              <div className="info-sidebar-component">
              <Link to="/full-screen">
                <i className="icon icon-fullscreen"></i>
              </Link>
            </div>
            )
        }else if(location.pathname == configPageRuta){
          return null;
        }else{
          return (
            <div className="info-sidebar-component">
            <Link to="/full-alerts">
              <i className="icon icon-info"></i>
            </Link>
            <Link to="/full-screen">
              <i className="icon icon-fullscreen"></i>
            </Link>
          </div>
          )
        }
      })()}
  </>
);
}
export default InfoSidebar;
