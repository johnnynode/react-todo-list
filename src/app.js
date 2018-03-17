import React, {Component} from 'react';

import Header from './views/header';
import Input from './views/input';
import List from './views/list';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Input />
        <List />
      </div>
    )
  }
}

export default App;