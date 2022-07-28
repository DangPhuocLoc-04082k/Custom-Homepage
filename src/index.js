import React from 'react';
import StoreProvider from './context/StoreProvider/StoreProvider';
import Fullpage from './components/FullPage/Fullpage';
import { render } from 'react-dom';
import './index.css'

function Index() {

    return (
        <StoreProvider>
            <Fullpage />
        </StoreProvider>
    )
}

render(<Index />, document.getElementById("root"));