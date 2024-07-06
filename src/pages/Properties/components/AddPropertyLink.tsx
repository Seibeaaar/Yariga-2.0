import { Link } from "react-router-dom";

const AddPropertyLink = () => {
  return (
    <Link
      to="/add-property"
      className="bg-primary py-[14px] px-[20px] rounded-[10px] transition-all border border-primary hover:bg-transparent text-white hover:text-primary text-sm"
    >
      + Add Property
    </Link>
  );
};

export default AddPropertyLink;
