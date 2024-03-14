import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import OrderCard, { State } from "../../components/OrderCard/OrderCard";
import OrderCardTwo from "../../components/OrderCard/OrderCard copy";
import { useDesignStore } from "../../store/design.store";
import { Link } from "react-router-dom";
import "./FullScreen.scss";

export default function FullScreen() {
  const navigate = useNavigate();
  const [touchPosition, setTouchPosition] = useState<any>();
  const [postionSelect, setPostionSelect] = useState<string>("");
  const { typeTypography, selectTypography, typeColumns, selectTypeColumn } =
    useDesignStore();

  const handleTouchStart = (event: any) => {
    const touch: any = event.touches[0];
    setTouchPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (event: any) => {
    const touch = event.touches[0];
    const deltaX = touch.clientX - touchPosition?.x;
    const deltaY = touch.clientY - touchPosition?.y;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        setPostionSelect("right");
      } else {
        setPostionSelect("left");
      }
    }
    // Reset touch position
    setTouchPosition(null);
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      navigate("/dashboard");
    }
  };

  const closeSubSlider = () => {
    setPostionSelect("initial");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <>
      {postionSelect == "right" ? (
        <motion.div
          initial={{ x: -100 }} // Initial position, starting from the left
          animate={{ x: 0 }} // Animate to the center
          exit={{ x: 50 }} // Animate to the right when exiting
          transition={{ duration: 0.5 }} // Transition duration
        >
          <div className="content-slider">
            Working Rigth
            <i
              onClick={() => closeSubSlider()}
              className="icon_close_full_screen"
            ></i>
          </div>
        </motion.div>
      ) : (
        ""
      )}

      {postionSelect == "left" ? (
        <motion.div
          initial={{ x: 10 }} // Initial position, starting from the left
          animate={{ x: 0 }} // Animate to the center
          exit={{ x: -100 }} // Animate to the right when exiting
          transition={{ duration: 0.5 }} // Transition duration
        >
          <div className="content-slider">
            Working Left
            <i
              onClick={() => closeSubSlider()}
              className="icon_close_full_screen"
            ></i>
          </div>
        </motion.div>
      ) : (
        ""
      )}
      <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <div className="full_screen_page">
          <div className="content_full_page">
            {(() => {
              if (typeColumns == 1) {
                return (
                  <div className="columns-stacked">
                    <article>
                      <OrderCard state={State.initial} />
                    </article>
                    <article>
                      <OrderCard state={State.initial} />
                    </article>
                    <article>
                      <OrderCardTwo state={State.completed} />
                    </article>
                    <article>
                      <OrderCard state={State.completed} />
                    </article>
                    <article>
                      <OrderCardTwo state={State.pending} />
                    </article>
                    <article>
                      <OrderCard state={State.initial} />
                    </article>
                    <article>
                      <OrderCard state={State.initial} />
                    </article>
                    <article>
                      <OrderCardTwo state={State.pending} />
                    </article>
                    <article>
                      <OrderCard state={State.completed} />
                    </article>
                  </div>
                );
              } else {
                return (
                  <div
                    className={`${
                      typeColumns == 0
                        ? "grid-equalHeight grid-4_lg-4_md-3_sm-1_xs-1"
                        : "grid-basic-flex"
                    }`}
                  >
                    <div className="col">
                      <OrderCard state={State.initial} />
                    </div>
                    <div className="col">
                      <OrderCard state={State.pending} />
                    </div>
                    <div className="col">
                      <OrderCardTwo state={State.completed} />
                    </div>
                    <div className="col">
                      <OrderCard state={State.completed} />
                    </div>
                    <div className="col">
                      <OrderCard state={State.completed} />
                    </div>
                  </div>
                );
              }
            })()}
            <Link to="../full-alerts">
              <i className="icon_info_full_screen"></i>
            </Link>
            <Link to="../dashboard">
              <i className="icon_close_full_screen"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
