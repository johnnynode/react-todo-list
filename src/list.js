import React, {Component} from 'react';

import ListItem from './list-item';

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
    )
  }
}

export default List;