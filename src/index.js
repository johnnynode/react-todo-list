import React from 'react';
import ReactDom from 'react-dom';

import Header from './header';
import Input from './input';

ReactDom.render(
  <div>
    <Header />
    <Input />
  </div>,
  document.querySelector('#root')
)