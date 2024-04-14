
interface ErrorProp{
    message : string
}

const ErrorMessage: React.FC<ErrorProp> = ({message}) => {
    return (
        <div>
            {message}
        </div>
    )
}

export default ErrorMessage
