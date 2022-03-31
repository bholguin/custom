import { FC } from "react"
import { IButtonProps } from "./Button.interfaces"

const Button: FC<IButtonProps> = (props): JSX.Element => {
    const { children, onClick } = props
    return (<button onClick={onClick}>{children}</button>)
}

export default Button