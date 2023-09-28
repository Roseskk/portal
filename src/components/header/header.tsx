import React from 'react';
import Navigation from "./navigation";

const Header: React.FC = () => {
    return(
        <header className={'sticky m-0 border-b'}>
            <Navigation />
        </header>
    )
}

export default Header;