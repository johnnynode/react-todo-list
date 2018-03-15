import React, {Component} from "react";

import Input from './input';

class ListItem extends Component {
  render() {
    return (
      <li>
        <Input 
          type="checkbox"
          checked={false}
          style={{width:15,height:15}}
        />
        <span>book 1</span>
        <button>x</button>
      </li>
    )
  }
}

export default ListItem;