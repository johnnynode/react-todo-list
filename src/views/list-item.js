import React, {Component} from 'react';

import Input from './input';

class ListItem extends Component {
  static get defaultProps() {
    return {
      
    }
  }
  render() {
    return (
      <div>
        <Input
          type="checkbox"
          style={{width:15,height:15,outline:"none"}}
          checked={false}
        />
        <span>
          hello
        </span>
        <button>x</button>
      </div>
    )
  }
}

export default ListItem;