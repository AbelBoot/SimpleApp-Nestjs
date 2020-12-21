import React from "react"

interface ButtonProps {
    textButton: string
}

export const  ButtonDelete: React.FC<ButtonProps> = ({textButton}) => {
    return (
        <button >{textButton}</button>
    )
}