import React from 'react';
import ReactDom from 'react-dom';

import Header from './header';

ReactDom.render(
  <div>
    <Header />
  </div>,
  document.querySelector('#root')
)