import React from 'react'

type Props = {
    PlaceHolder?: string,
    onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void,
    Value: string,
    name: string
}

function CustomInput({ PlaceHolder = '', onChangeFunc, Value, name }: Props) {
    return (
        <div className='w-full'>
            <input className='h-14 rounded-md  bg-customGray px-4 w-full'
                value={ Value } onChange={ onChangeFunc } placeholder={ PlaceHolder } name={ name } />
        </div>
    )
}

export default CustomInput