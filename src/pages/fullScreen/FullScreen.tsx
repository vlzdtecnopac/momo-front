import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderCard, { State } from "../../components/OrderCard/OrderCard";
import OrderCardTwo from "../../components/OrderCard/OrderCard copy";
import { useDesignStore } from "../../store/design.store";
import "./FullScreen.scss";
import { Link } from "react-router-dom";

export default function FullScreen() {
  const {typeTypography, selectTypography, typeColumns, selectTypeColumn} =  useDesignStore();
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
    <div className="full_screen_page">
      <div className="content_full_page">
 {(() => {
        if(typeColumns == 1) {
          return(<div className="columns-stacked">
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
        </div>);
        }else{
          return(<div className={`${typeColumns == 0 ?   'grid-equalHeight grid-4_lg-4_md-3_sm-1_xs-1' : 'grid-basic-flex' }`}>
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
        </div>)
        }
      })()}
      <Link to="../dashboard"><i className="icon_close_full_screen"></i></Link>
    </div>
    </div>
  );
}
