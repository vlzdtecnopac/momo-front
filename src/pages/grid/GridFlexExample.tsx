import Card from "../../components/Card/Card";
import OrderCard, { State } from "../../components/OrderCard/OrderCard";
import OrderCardTwo from "../../components/OrderCard/OrderCard copy";

function AppGridFlex(){
    return(<div className="grid-equalHeight grid-4_lg-4_md-4_sm-1_xs-1">
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCardTwo state={State.initial}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCardTwo state={State.initial}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
    <div className="col"><OrderCard state={State.completed}/></div>
 
</div>
    );
}

export default AppGridFlex;