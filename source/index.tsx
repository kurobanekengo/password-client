import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultTypelessProvider, Hmr, startHmr } from 'typeless';

const MOUNT_NODE = document.getElementById('approot');
const render = () => {
  const App = require('./features/components/password').Password;
  ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  ReactDOM.render(
    <Hmr>
        <DefaultTypelessProvider>
        <App />
        </DefaultTypelessProvider>
    </Hmr>
    ,MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept('./features/components/password', () => {
    startHmr();
    render();
  });
}
render();
