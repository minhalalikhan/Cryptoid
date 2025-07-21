import React, { useState } from 'react'
import { token } from '../Types/Types'
import { FaAngleDown } from "react-icons/fa";
import TokenLogo from './TokenLogo'


type Props = {
    value: "" | string,
    onChange: (e: token) => void,
    name: string
}


function TokenSelect({ value, onChange, name }: Props) {

    const options: token[] = [
        "Bitcoin", "Ethereum", "Polygon", "Solana",
    ]

    const [selectedValue, setSelectedValue] = useState<token>("Bitcoin");



    const selectedOption = options.find(option => option === selectedValue);

    const [open, setopen] = useState<boolean>(false)

    function toggleOpen() {
        setopen(!open)
    }

    const handleSelectChange = (input: token) => {

        setSelectedValue(input);
        onChange(input)
        console.log('value of token', value)
        setopen(false)
    };
    return (
        <div className="w-full relative flex flex-col gap-3">
            {/* Select box */ }
            <div
                onClick={ toggleOpen }
                className=' px-4 h-14 w-full bg-customGray hover:bg-customDarkGray rounded-md flex flex-row items-center cursor-pointer'>
                <div className='flex  items-center justify-center w-10 h-full '>

                    <TokenLogo token={ selectedValue } />

                </div>
                <div className='flex flex-1 items-center px-4 text-2xl text-gray-300 font-semibold'>
                    { selectedValue }
                </div>
                <div>
                    <FaAngleDown className='text-gray-500 text-xl' />
                </div>
            </div>
            {/* options */ }
            { open &&
                <div className='relative  '>
                    <div className='absolute top-0 left-0 rounded-lg w-full'>
                        { options.map((item) => {

                            return (
                                <div
                                    onClick={ () => handleSelectChange(item) }
                                    className=' px-4 h-14 w-full bg-customGray hover:bg-customDarkGray flex flex-row items-center cursor-pointer'>
                                    <div className='flex  items-center justify-center w-10 h-full '>

                                        <TokenLogo token={ item } />

                                    </div>
                                    <div className='flex flex-1 items-center px-4 text-2xl text-gray-300 font-semibold'>
                                        { item }
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            }
        </div>
    )
}

export default TokenSelect