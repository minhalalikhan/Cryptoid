import { useState } from "react";
import { IoClose } from "react-icons/io5";
import CustomRouteLink from "./CustomRouteLink";
import CustomInput from "../components/CustomInput";
import TokenSelect from "../components/TokenSelect";
import { token } from "../Types/Types";

type Props = {}

type NewWallet = {
    Wallet_public_name: string,
    wallet_public_id: null | string,
    wallet_token: "" | token,
    wallet_balance: number
}

function CreateWallet({ }: Props) {

    const [newWallet, SetnewWallet] = useState<NewWallet>({
        Wallet_public_name: '',
        wallet_public_id: null,
        wallet_token: "",
        wallet_balance: 0
    })

    function HandleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {


        SetnewWallet({ ...newWallet, [e.target.name]: e.target.value })
        console.log(newWallet.Wallet_public_name)
    }
    function HandleTokenChange(input: token) {
        SetnewWallet({ ...newWallet, wallet_token: input })
    }

    return (
        <div className=" flex flex-col w-full h-full text-white bg-primary items-center">
            <div className="flex flex-row p-4 h-[90px] w-full">


                <CustomRouteLink path='-1' >
                    <IoClose className="text-gray-400 text-xl" />

                </CustomRouteLink>

                <h3 className="text-center flex-1"> Create Wallet</h3>
            </div>
            {/* Wallet Name */ }
            <div className="w-[80%] items-center flex-col flex gap-5">

                <CustomInput PlaceHolder="Enter Wallet Name" Value={ newWallet.Wallet_public_name }
                    name="Wallet_public_name"
                    onChangeFunc={ HandleChange } />
                {/* Wallet  */ }
                <TokenSelect
                    value={ newWallet.wallet_token }
                    name="wallet_token"
                    onChange={ HandleTokenChange } />

                <div className="bg-orange-600 py-2 px-4 rounded-md flex justify-center cursor-pointer items-center">
                    <p className="text-xl">Generate Wallet</p>
                </div>
            </div>
        </div>

    )
}

export default CreateWallet