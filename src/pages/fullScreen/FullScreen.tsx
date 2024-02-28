import OrderCard, { State } from "../../components/OrderCard/OrderCard";
import OrderCardTwo from "../../components/OrderCard/OrderCard copy";
import "./FullScreen.scss";

export default function FullScreen(){
    return(
        <>
<div className="columns">
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