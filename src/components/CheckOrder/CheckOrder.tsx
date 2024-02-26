import "./CheckOrder.scss";
function CheckOrder() {
  return (
    <div className="checkorder">
      <input
        type="radio"
        name="ready"
        id="ready"
      />
      <label htmlFor="ready"></label>
    </div>
  );
}
export default CheckOrder;
