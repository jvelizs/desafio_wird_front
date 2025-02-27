"use client";

import { Provider } from 'react-redux'
import { store } from './store';

const StoreProvide =({children}: {children: React.ReactNode}) => {
    return (
    <Provider store={store}>
        {children}
    </Provider>);
};

export default StoreProvide;