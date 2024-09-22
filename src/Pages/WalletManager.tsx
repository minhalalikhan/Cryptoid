import { Link } from "react-router-dom";

type Props = {};

function WalletManager({}: Props) {
  return (
    <div className="flex flex-col w-full h-full">
      <Link to={"/"}>{"<-"}</Link>
      Wallet Manager
    </div>
  );
}

export default WalletManager;
