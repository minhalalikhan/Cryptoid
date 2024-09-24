
import Bitcoin from '../assets/Bitcoin.svg'
import Solana from '../assets/Solana.svg'
import Ethereum from '../assets/Ethereum.svg'
import Polygon from '../assets/Polygon.svg'

import { token } from '../Types/Types'

type Props = {
    token: token,
    className?: string,
    style?: Object,
}
function getImage(token: token) {
    if (token === 'Bitcoin') {
        return Bitcoin
    }
    if (token === 'Ethereum') {
        return Ethereum
    }
    if (token === 'Solana') {
        return Solana
    }
    if (token === 'Polygon') {
        return Polygon
    }

}

function TokenLogo({ token, className = '', }: Props) {


    return (
        <img className={ `${className}` }
            style={ {} }
            src={ getImage(token) } />
    )
}

export default TokenLogo