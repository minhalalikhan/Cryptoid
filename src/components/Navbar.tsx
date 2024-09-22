import { Link } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className=" w-full h-16 border-b-2 flex flex-row justify-center">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center">
        <h1 className="font-bold mx-auto">Cryptoid</h1>
        <div className=" flex flex-row w-full relative justify-between">
          <Link to={"/account"}>
            <AccountButton name="Minhal Ali Khan" />
          </Link>
          <Link to={"/walletmanager"}>
            <WallettButton name="Wallet 1" logo="" />
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
    <div className="w-8 h-8 flex justify-center items-center font- text-sm rounded-full bg-red-900 text-red-500">
      <p>{Initials}</p>
    </div>
  );
}

type WalletButtonProps = { name: string; logo: string };

function WallettButton({ name = "", logo = "" }: WalletButtonProps) {
  return (
    <div className="rounded-lg px-4 py-1 border-slate-100 bg-slate-800 text-white">
      {logo && <img src={logo} />}
      <p>{name}</p>
    </div>
  );
}
