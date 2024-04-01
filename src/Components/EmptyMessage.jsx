import { Link } from "react-router-dom";

const EmptyMessage = ({ message, address, label }) => {
  return (
    <div className="min-h-[calc(100vh-112px)] flex flex-col justify-center items-center gap-5 pb-16">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>

      <Link
        to={address}
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
        <span className="relative text-black group-hover:text-white">
          {label}
        </span>
      </Link>
    </div>
  );
};

export default EmptyMessage;
