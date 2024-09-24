import { ReactNode } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

type Props = {
    children: ReactNode
    name?: string, path: string
}

function CustomRouteLink({ children, path }: Props) {

    const navigate = useNavigate()
    const location = useLocation()
    if (path === '-1')
        return (
            <div
                className="cursor-pointer"
                // to={ path }
                // state={ { Background: location.state?.background || location } }
                onClick={ (e) => {
                    e.preventDefault()
                    navigate(-1)
                } }>{ children }</div>
        )

    return (
        <Link className="cursor-pointer " to={ path } state={ { Background: location.state?.Background || location } } onClick={ () => { console.log('custom route :', location) } }>
            { children }
        </Link>
    )
}

export default CustomRouteLink