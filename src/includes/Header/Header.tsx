import { useEffect, useState } from "react";
import logoMomo from "../../assets/logo.svg";
import profilePic from "../../assets/profile-pic.jpg";
import { useDesignStore } from "../../store/design.store";
import { useShoppingStore } from "../../store/shopping.store";
import { useEmployeeStore } from "../../store/employee.store";
import "./Header.scss";

function Header() {
  const { data, fetchData } = useShoppingStore();
  const { fetchEmployeeData } = useEmployeeStore();
  const { typeTypography } = useDesignStore();
  const [loader, setIsLoading] = useState<Boolean>(false);  

  useEffect(() => {
    if(!loader){
    setIsLoading(true);
    const fetchDataOnMount = async () => {
      const employeeId = localStorage.getItem("employee-id");
      if (employeeId) {
        fetchEmployeeData(employeeId)
          .then(async(resp: any) => await fetchData(resp[0].shopping_id))
      }
    };
    fetchDataOnMount();
    }
  }, [loader]);

  return (
    <header className="head">
      <div className="column_start"></div>
      <div className="column_center">
        <img
          className="logo"
          src={logoMomo}
          alt="logo"
        />
      </div>
      <div className="column_end">
        <div className="welcome-text">
          <p className={`welcome ${typeTypography}-text`}>Bienvenida</p>
          <p className={`store ${typeTypography}-text`}>{data[0]?.name_shopping}</p>
        </div>
        <img
          className="profile-pic"
          src={profilePic}
          alt="logo"
        />
      </div>
    </header>
  );
}
export default Header;
