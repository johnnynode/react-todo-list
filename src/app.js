import React, {Component} from 'react';

import Header from './views/header';
import Input from './views/input';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Input />
      </div>
    )
  }
}

export default App;