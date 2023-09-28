import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouter = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithRouterComponent: React.FC<P> = (props) => {
        return (
            <BrowserRouter>
                <WrappedComponent {...props as P} />
            </BrowserRouter>
        );
    };

    return WithRouterComponent;
};

export default withRouter;
