/**
  Render the ReactDOM on Server and return it when route gets requested
*/
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import html from './html';

import App from '../both/ui/App';

function renderHtml(req, res) {
  const renderComponent = <App />;

  res.send(html({
    appHtml: ReactDOMServer.renderToString(renderComponent),
  }));
}

export default renderHtml;
