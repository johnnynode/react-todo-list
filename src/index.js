import React from 'react';
import ReactDom from 'react-dom';

import Header from './header';
import Input from './input';

ReactDom.render(
  <div>
    <Header name="John" todoCount={3} />
    <Input />
  </div>,
  document.getElementById('root')
)