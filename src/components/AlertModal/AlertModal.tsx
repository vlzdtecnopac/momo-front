import "./AlertModal.scss";
import RedAlertIcon from "../../assets/icons/red-alert.svg";
import { useState } from "react";
interface AlertModalProps {
  units: string;
  product: string;
  state: string;
}

function AlertModal({ units, product, state }: AlertModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className={`alert-container ${isOpen ? "is-open" : ""}`}>
      <div className={`alert-modal bg-${state}`}>
        <h2 className="alert-modal-title">¡Atención Inventario crítico!</h2>
        <img
          src={RedAlertIcon}
          alt="Red Alert Icon"
          className="alert-modal-icon"
        />

        <p className="alert-modal-number">{units} unidades</p>
        <p className="alert-modal-product">{product}</p>

        <button
          onClick={closeModal}
          className={`alert-modal-btn btn-${state}`}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
