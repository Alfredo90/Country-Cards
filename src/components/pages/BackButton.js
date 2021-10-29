import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <button
          type="button"
          className="border-2 rounded-md border-gray-700 shadow w-136 h-40 flex align-items-center justify-center text-18 pt-2"
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
