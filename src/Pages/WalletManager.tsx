import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaClipboard } from "react-icons/fa";
import TokenLogo from "../components/TokenLogo";
import { WalletInfo } from "../Types/Types";

type Props = {};

const DummyWallets: WalletInfo[] = [{
  Wallet_public_name: 'personal 1',
  wallet_public_id: '38592ngfr7230sfwr39',
  wallet_token: "Polygon",
  wallet_balance: 5
}, {
  Wallet_public_name: 'burner ',
  wallet_public_id: '38592103807230saedq39',
  wallet_token: "Solana",
  wallet_balance: 7
},
{
  Wallet_public_name: 'personal 1',
  wallet_public_id: '1332uihf0r3r39',
  wallet_token: "Bitcoin",
  wallet_balance: 12
}, {
  Wallet_public_name: 'burner ',
  wallet_public_id: '38592103807230saedq39',
  wallet_token: "Solana",
  wallet_balance: 7
}, {
  Wallet_public_name: 'burner ',
  wallet_public_id: '38592103807230saedq39',
  wallet_token: "Solana",
  wallet_balance: 7
}, {
  Wallet_public_name: 'burner ',
  wallet_public_id: '38592103807230saedq39',
  wallet_token: "Solana",
  wallet_balance: 7
}, {
  Wallet_public_name: 'burner ',
  wallet_public_id: '38592103807230saedq39',
  wallet_token: "Solana",
  wallet_balance: 7
}, {
  Wallet_public_name: 'burner ',
  wallet_public_id: '38592103807230saedq39',
  wallet_token: "Solana",
  wallet_balance: 7
}, {
  Wallet_public_name: 'burner ',
  wallet_public_id: '38592103807230saedq39',
  wallet_token: "Solana",
  wallet_balance: 7
}]

function WalletManager({ }: Props) {
  return (
    <div className="flex flex-col w-full h-full text-white  z-0 bg-primary">
      <div className="flex flex-row p-4 h-[90px]">

        <Link to={ "/" }><IoClose className="text-gray-400 text-xl" /></Link>
        <h3 className="text-center flex-1"> Wallets</h3>
      </div>
      {/* Create New Wallet */ }
      <div className="flex flex-col gap-2 w-full py-4 px-[5%] h-[60px]">
        <p className="font-medium text-orange-400 text-lg cursor-pointer">+ Create New Wallet</p>
      </div>
      {/* List of Wallets */ }
      <div className="flex flex-col gap-3 w-full items-center flex-1 overflow-y-auto">
        { DummyWallets.map((item, i) => {
          return (
            <Wallet info={ item } key={ i } />
          )
        }) }
      </div>
    </div>
  );
}

export default WalletManager;


function Wallet({ info }: { info: WalletInfo }) {
  return (
    <div className="flex flex-row w-[90%] h-[80px]
    flex-shrink-0
     bg-customGray hover:bg-customDarkGray rounded-xl cursor-pointer">
      <div className="flex justify-center items-center w-[100px] p-2">
        <TokenLogo token={ info.wallet_token } className="w-[30px] h-[30px]" />
      </div>
      <div className="flex flex-col flex-1 justify-center ">
        <p className="text-gray-300 text-xl font-extrabold">{ info.Wallet_public_name }</p>
        <p className="text-gray-400 text-lg font-normal font-bold">{ info.wallet_public_id }</p>
      </div>
      <div className="flex flex-row justify-center items-center p-4 gap-2">
        <IoMenu className="text-2xl text-gray-500 hover:text-gray-700" />
        <FaClipboard className="text-2xl text-gray-500 hover:text-gray-700" />
      </div>
    </div>
  )
}
