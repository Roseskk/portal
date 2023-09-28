import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Путь к твоему store.ts

const withRedux = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithReduxComponent: React.FC<P> = (props) => {
        return (
            <Provider store={store}>
                <WrappedComponent {...props as P} />
            </Provider>
        );
    };

    return WithReduxComponent;
};

export default withRedux;
