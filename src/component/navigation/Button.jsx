import { Link } from "react-router-dom";

function Button({ selected, path, value }) {
  return (
    <>
      {selected ? (
        <div className="navi_button selected">
          <Link to={path}>{value}</Link>
        </div>
      ) : (
        <div className="navi_button">
          <Link to={path}>{value}</Link>
        </div>
      )}
    </>
  );
}

export default Button;
