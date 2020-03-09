import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultTypelessProvider, Hmr, startHmr } from 'typeless';

const MOUNT_NODE = document.getElementById('approot');
const render = () => {
  const App = require('./frontend/password/containers/password').Password;
  if (MOUNT_NODE != null) {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    ReactDOM.render(
      <Hmr>
          <DefaultTypelessProvider>
            <App />
          </DefaultTypelessProvider>
      </Hmr>
      ,MOUNT_NODE
    );
  }
};

if (module.hot) {
  module.hot.accept('./frontend/password/containers/password', () => {
    startHmr();
    render();
  });
}
render();
