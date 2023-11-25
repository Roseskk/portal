import React from 'react';

interface ICustomButtonProps {
    label: string,
    btnClass?: string,
    handleClick: () => void,
}

const CustomButton: React.FC<ICustomButtonProps> = ({label, ...props}) => {
    return(
        <button className={`${props.btnClass ? props.btnClass : 'p-4 rounded text-center text-white font-bold bg-black mt-5 '}`} onClick={props.handleClick}>{label}</button>
    )
}

export default CustomButton;