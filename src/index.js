import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

require('file-loader?name=[name].[ext]!../public/index.html');
require('../public/stylesheets/main.scss');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
