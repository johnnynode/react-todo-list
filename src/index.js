import React from 'react';
import ReactDom from 'react-dom';

import Header from './header';
import Input from './input';
import List from './list';

ReactDom.render(
  <div>
    <Header name="John" todoCount={3} />
    <Input />
    <List />
  </div>,
  document.getElementById('root')
)