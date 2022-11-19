import "./sellingPoint.css";

const SellingPoint = ({ head, text }) => {
  return (
    <div className="selling-point">
      <h3 className="selling-point-head">{head}</h3>
      <div className="selling-point-text">{text}</div>
    </div>
  );
};

export default SellingPoint;
