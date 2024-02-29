import "./ConnectedKioskos.scss";
import kioskoIcon from "../../assets/icons/kiosko.svg";
import greenKioskoIcon from "../../assets/icons/green-kiosko.svg";
import DisconnectCard from "../Card/DisconnectCard/DisconnectCard";
import AddCard from "../Card/DisconnectCard/AddCard/AddCard";
import addIcon from "../../assets/icons/add.svg";
function ConnectedKioskos() {
  return (
    <>
      <div className="connected">
        <h2 className="connected-title">Kioskos conectados</h2>
        <div className="connected-group">
          <DisconnectCard
            icon={kioskoIcon}
            text="KIOSKO"
            subText="Tienda 1"
            state="Conectado"
            backgroundColor="#D5EAFB"
          />
          <DisconnectCard
            icon={kioskoIcon}
            text="KIOSKO"
            subText="Tienda 1"
            state="Conectado"
            backgroundColor="#D5EAFB"
          />
          <DisconnectCard
            icon={kioskoIcon}
            text="KIOSKO"
            subText="Tienda 1"
            state="Conectado"
            backgroundColor="#D5EAFB"
          />
          <div className="add-kiosko">
            <AddCard
              icon={greenKioskoIcon}
              text="KIOSKO"
              backgroundColor="#EDEDED"
            />

            <button className="btn add-btn ">
              {" "}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="10"
                  fill="#ff6010"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.99949 1.31579V8.68421V1.31579Z"
                  fill="white"
                />
                <path
                  d="M4.99949 1.31579V8.68421"
                  stroke="#FF6010"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.31445 5H8.68287H1.31445Z"
                  fill="white"
                />
                <path
                  d="M1.31445 5H8.68287"
                  stroke="#FF6010"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Añadir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ConnectedKioskos;
