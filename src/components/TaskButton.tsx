import { IconType } from "react-icons";
import { MdArrowForwardIos } from "react-icons/md";
type Props = {
    Icon?: IconType | null,
    name: string,
    onclickFunc?: () => void
}

function TaskButton({ Icon = null, name, onclickFunc }: Props) {
    return (
        <div className="w-full h-12 bg-customGray hover:bg-customDarkGray rounded-lg flex flex-row p-2 cursor-pointer"
            onClick={ onclickFunc }
        >
            { Icon && <div className="w-16 p-2 flex justify-center items-center">
                {/* logo */ }
                <Icon className="text-xl text-gray-500" />
            </div> }
            <div className="flex-1 flex flex-col justify-center">
                { name }
            </div>
            <div className="w-16 flex justify-center items-center">
                <MdArrowForwardIos className="text-gray-500 text-xl font-bold" />
            </div>
        </div>
    )
}

export default TaskButton