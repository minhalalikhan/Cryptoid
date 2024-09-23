import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

type Props = {};

function WalletManager({ }: Props) {
  return (
    <div className="flex flex-col w-full h-full text-white  z-0 bg-primary">
      <div className="flex flex-row p-4">

        <Link to={ "/" }><IoClose className="text-gray-400 text-xl" /></Link>
        <h3 className="text-center flex-1"> Wallets</h3>
      </div>
    </div>
  );
}

export default WalletManager;
