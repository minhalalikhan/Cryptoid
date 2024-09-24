import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import CustomRouteLink from "./CustomRouteLink";
import { Link } from "react-router-dom";

type Props = {}



function CreateWallet({ }: Props) {


    return (
        <div className="flex flex-col w-full h-full text-white bg-primary">
            <div className="flex flex-row p-4 h-[90px]">

                {/* <Link to={ "/walletmanager" }>
                </Link> */ }
                <CustomRouteLink path='-1' >
                    <IoClose className="text-gray-400 text-xl" />

                </CustomRouteLink>

                <h3 className="text-center flex-1"> Create Wallet</h3>
            </div>
            {/* <h1>Create Wallet</h1> */ }
        </div>

    )
}

export default CreateWallet