import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import photo from "../../assets/login-img.jpg";
import ConfigTabs from "../../components/Tabs/ConfigTabs/ConfigTabs";
import Layout from "../../includes/layout/Layout";
import GeneralInfoForm from "../../components/GeneralInfoForm/GeneralInfoForm";
import ConnectedKioskos from "../../components/ConnectedKioskos/ConnectedKioskos";
import DisplayConfig from "../../components/DisplayConfig/DisplayConfig";
import "./../dashboard/DashboardPage.scss";
import "./ConfigPage.scss";
import { useDesignStore } from "../../store/design.store";
import { useShoppingStore } from "../../store/shopping.store";
import { useEmployeeStore } from "../../store/employee.store";

function ConfigPage() {
  const { typeTypography } = useDesignStore();
  const { fetchEmployeeData } = useEmployeeStore();
  const { data, fetchData } = useShoppingStore();
  const [loader, setIsLoading] = useState<Boolean>(false); 
  const [postionTab, setPositionTab] = useState<number>(0);
  const handleClickTab = (resp: number) => setPositionTab(resp);

  const fadeInOutVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if(!loader){
    setIsLoading(true);
    const fetchDataOnMount = async () => {
      const employeeId = localStorage.getItem("employee-id");
      if (employeeId) {
        fetchEmployeeData(employeeId).then(async(resp: any) => await fetchData(resp[0].shopping_id));
      }
    };
    fetchDataOnMount();
    }
  }, [loader]);



  return (<Layout>
          <div className="config_page">
            <div className="bg-blue">
              <div className="header_blue"></div>
              <div className="header_white">
                <ConfigTabs onClick={(event) => handleClickTab(event)} />
              </div>
              <div className="header_info">
                <div className="grid-2_xs-1">
                  <div className="col-2_xs-6_sm-4">
                    <img
                      className="profile-pic"
                      src={photo}
                      alt="photo"
                    />
                  </div>
                  <div className="col-10_sm-5">
                    <h2 className={`store ${typeTypography}-text`}> {data[0]?.name_shopping}</h2>
                    <span className={`address ${typeTypography}-text`}>
                      {data[0]?.address}
                    </span>
                  </div>
                </div>
              </div>
              <div className="conten_tabs">
                <div className="bg_content">
                  <motion.div
                    key={postionTab}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInOutVariants}
                    transition={{ duration: 1 }} // Adjust the duration as needed
                  >
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
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
  );
}
export default ConfigPage;
