import { useDesignStore } from "../../store/design.store";
import "./TakeoutBadge.scss";

function TakeoutBadge() {
  const { typeTypography } = useDesignStore();

  return <button className={`badge ${typeTypography}-text`}>Takeout</button>;
}
export default TakeoutBadge;
