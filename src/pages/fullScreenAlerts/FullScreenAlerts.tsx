import { useEffect } from "react";
import AlertsTable from "../../components/Table/AlertsTable/AlertsTable";
import "./FullScreenAlerts.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function FullScreenAlerts() {
  const navigate = useNavigate();
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <>
      <div className="alert_table_full_screen">
        <AlertsTable />
        <Link to="../full-screen">
          <i className="icon_dashboard_full_alerts"></i>
        </Link>
        <Link to="../dashboard">
          <i className="icon_close_full_screen"></i>
        </Link>
      </div>
    </>
  );
}

export default FullScreenAlerts;
