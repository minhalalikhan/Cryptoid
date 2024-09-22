import { Link } from "react-router-dom";

type Props = {};

function AccountManager({}: Props) {
  return (
    <div className="flex flex-col w-full h-full">
      <Link to={"/"}>{"<-"}</Link>
      Acount Manager
    </div>
  );
}

export default AccountManager;
