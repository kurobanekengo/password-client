import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultTypelessProvider } from 'typeless';
import { Password } from './features/components/password';

ReactDOM.render(
    <DefaultTypelessProvider>
        <Password />
    </DefaultTypelessProvider>,
    document.getElementById('approot')
)