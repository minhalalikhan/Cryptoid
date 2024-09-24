
type Props = {
    name: string,
    className?: string,
    TextClass?: string
}

function NameLogo({ name, className = '', TextClass = '' }: Props) {
    let Initials: string | string[] = name.split(" ");
    Initials = Initials[0][0] + Initials[Initials.length - 1][0];
    return (
        <div className={ ` bg-yellow-800 text-yellow-300 w-12 h-12 flex justify-center items-center   rounded-full ${className}` }>
            <p className={ ` ${TextClass}` }>{ Initials }</p>
        </div>
    );
}

export default NameLogo