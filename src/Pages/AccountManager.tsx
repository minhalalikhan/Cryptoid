import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import NameLogo from "../components/NameLogo";
import { MdEdit } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import TaskButton from "../components/TaskButton";

type Props = {};

function AccountManager({ }: Props) {
  return (
    <div className="flex flex-col w-full h-full text-white bg-primary">
      <div className="flex flex-row justify-center items-center p-2 gap-2">

        <Link to={ "/" }><FaArrowLeft className="text-gray-400 text-xl" /></Link>

        <h3 className="text-center flex-1 text-xl font-bold">  Acount Manager</h3>

      </div>
      {/* Logo and Name Header */ }
      <div className="flex justify-center items-center h-[200px] flex-col gap-4">
        <NameLogo name="Minhal Ali khan" className="h-16 w-16 text-2xl" />
        <div className="flex flex-row gap-2 mx-auto justify-center items-center cursor-pointer text-gray-200 hover:text-gray-500">
          <p className="font-semibold">Minhal Ali Khan</p>
          <MdEdit className="" />
        </div>
      </div>
      {/* options */ }
      <div className="flex flex-col gap-6 w-full  items-center">
        <section className="flex flex-col w-full items-center">
          <TaskButton name="Wallets" Icon={ LuWallet } />
        </section>
        <section className="flex flex-col w-full items-center">
          <TaskButton name="Lock" Icon={ FiLock } />
        </section>
        <section className="flex flex-col w-full items-center">
          <TaskButton name="Change Password" />
          <TaskButton name="Show Secret Recovery Phrase" />
          <TaskButton name="Remove Account" />
        </section>
        <section className="flex flex-col w-full items-center">
          <TaskButton name="About Cryptoid" />
        </section>
      </div>
    </div>
  );
}

export default AccountManager;


