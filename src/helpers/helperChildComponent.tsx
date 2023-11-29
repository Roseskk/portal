import React, {memo} from 'react';

const HelperChildComponent = ({children, ...props} : {children: React.ReactNode, customClasses?: string, displayValue: boolean, handleOut: () => void}) =>  {
    return(
        <div className={`${props.displayValue ? 'block' : 'hidden'} z-40 w-3/4 ${props.customClasses ? props.customClasses : 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}`}>
            {children}
            <div onClick={props.handleOut} className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-black opacity-50 z-[-1]'} />
        </div>
    )
};

export default memo(HelperChildComponent);