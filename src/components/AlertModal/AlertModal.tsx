import "./AlertModal.scss";
import RedAlertIcon from "../../assets/icons/red-alert.svg";
import { useState } from "react";
import { useDesignStore } from "../../store/design.store";

interface AlertModalProps {
  units: string;
  product: string;
  state: string;
}

function AlertModal({ units, product, state }: AlertModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => setIsOpen(false);
  const { typeTypography } = useDesignStore();

  return (
    <div className={`alert-container ${isOpen ? "is-open" : ""}`}>
      <div className={`alert-modal bg-${state}`}>
        <h2 className={`alert-modal-title ${typeTypography}-text`}>
          ¡Atención Inventario crítico!
        </h2>
        <img
          src={RedAlertIcon}
          alt="Red Alert Icon"
          className="alert-modal-icon"
        />

        <p className={`alert-modal-number ${typeTypography}-text`}>
          {units} unidades
        </p>
        <p className={`alert-modal-product ${typeTypography}-text`}>
          {product}
        </p>

        <button
          onClick={closeModal}
          className={`alert-modal-btn btn-${state} ${typeTypography}-text`}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
