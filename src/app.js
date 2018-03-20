import React, {Component} from 'react';

import Header from './views/header';
import Input from './views/input';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Input 
          style={{width:250,height:30,outline:"none",margin:"10px 0",paddingLeft:5}} 
        />
        
      </div>
    )
  }
}

export default App;