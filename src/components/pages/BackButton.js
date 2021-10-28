import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <button type="button" className="border-2 p-4 shadow">Back</button>
      </Link>
    </div>
  );
};

export default BackButton;
