import { Link } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className=" w-full h-16 border-b-2 flex flex-row justify-center">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center">
        <h1 className="font-bold mx-auto">Cryptoid</h1>
        <div className=" flex flex-row w-1/2 justify-between">
          <Link to={"/account"}>
            <AccountButton name="" />
          </Link>
          <Link to={"/walletmanager"}>
            <WallettButton />
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
  Initials = Initials[0] + Initials[Initials.length - 1];

  return (
    <div className="w-12 rounded-full bg-red-900 text-red-500">
      <p>{Initials}</p>
    </div>
  );
}

type WalletButtonProps = {};

function WallettButton({}: WalletButtonProps) {
  return <div></div>;
}
