import { useEffect } from "react";
import AlertsTable from "../../components/Table/alertsTable";
import "./FullScreenAlerts.scss";
import { useNavigate } from "react-router-dom";

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
      </div>
    </>
  );
}

export default FullScreenAlerts;