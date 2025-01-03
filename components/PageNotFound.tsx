import Link from "next/link";
import { GiChewedSkull } from "react-icons/gi";
import { ImHome } from "react-icons/im";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-8">
      <GiChewedSkull size={290} className="text-gray-500" />
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
        Level Not Found!
      </h1>
      <p className="text-xl md:text-2l font-semibold mb-2">
        Whoops! You've Entered Uncharted Territory!
      </p>
      <Link
        href="/"
        className="mt-5 px-6 py-2 bg-blue-500 text-white hover:scale-110 duration-300 rounded-full hover:bg-blue-600 transition-all text-lg flex items-center"
      >
        <ImHome className="mr-2" /> Return to lobby
      </Link>
    </div>
  );
};

export default PageNotFound;
