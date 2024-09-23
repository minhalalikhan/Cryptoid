import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import Solana from "../assets/solana.svg";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className=" w-full  border-b-1 border-slate-600 flex flex-row justify-center">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center px-2 py-1">
        <h1 className="font-bold mx-auto text-white p-2">Cryptoid</h1>
        <div className=" flex flex-row w-full relative justify-center">
          <Link to={"/account"}>
            <AccountButton name="Minhal Ali Khan" />
          </Link>
          <Link to={"/walletmanager"}>
            <WallettButton name="Wallet 1" logo={Solana} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

type AccountButtonProps = { name: string };

function AccountButton({ name = "" }: AccountButtonProps) {
  let Initials: string | string[] = name.split(" ");
  Initials = Initials[0][0] + Initials[Initials.length - 1][0];
  console.log(Initials);
  return (
    <div className="w-8 h-8 flex justify-center items-center font- text-sm rounded-full bg-red-950 text-red-500 absolute left-0 top-0">
      <p>{Initials}</p>
    </div>
  );
}

type WalletButtonProps = { name: string; logo: string };

function WallettButton({ name = "", logo = "" }: WalletButtonProps) {
  return (
    <div className="rounded-lg  border-slate-500 border bg-gray-800  text-white flex flex-row">
      <div className="rounded-l-lg p-2  min-w-[50px] hover:bg-gray-900 flex justify-center items-center">
        {logo && <img style={{ width: "20px" }} src={logo} />}
      </div>
      <div className="min-w-[100px] p-2 hover:bg-gray-900 border-x border-collapse  border-slate-500  flex justify-center items-center">
        <p className="flex-1">{name}</p>
        <FaAngleDown className="text-gray-500" />
      </div>

      <div className="rounded-r-lg min-w-[50px] p-2 hover:bg-gray-900  flex justify-center items-center">
        <FaClipboard className="text-gray-500" />
      </div>
    </div>
  );
}
