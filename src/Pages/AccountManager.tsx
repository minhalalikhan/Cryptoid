import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

type Props = {};

function AccountManager({ }: Props) {
  return (
    <div className="flex flex-col w-full h-full text-white bg-primary">
      <div className="flex flex-row justify-center items-center p-2 gap-2">

        <Link to={ "/" }><FaArrowLeft className="text-gray-400 text-xl" /></Link>

        <h3 className="text-center flex-1 text-xl font-bold">  Acount Manager</h3>

      </div>
      {/* Logo and Name Header */ }
      <div className="flex justify-center items-center h-[150px]">

      </div>
      {/* options */ }
      <div className="flex flex-col gap-2 w-full  items-center">

      </div>
    </div>
  );
}

export default AccountManager;
