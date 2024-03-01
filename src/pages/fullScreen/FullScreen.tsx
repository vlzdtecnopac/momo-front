import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderCard, { State } from "../../components/OrderCard/OrderCard";
import OrderCardTwo from "../../components/OrderCard/OrderCard copy";
import "./FullScreen.scss";

export default function FullScreen() {
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
      <div className="columns-full-screen">
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
    </>
  );
}
