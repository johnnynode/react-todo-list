import React, {Component} from 'react';

import ListItem from './list-item';

class List extends Component {
  static get defaultProps() {
    return {
      readList:[]
    }
  }
  render() {
    const {
      readList
    } = this.props;
    return (
      <div>
        <ul>
          {
            readList.map((item)=>{
              return (
                <li key={item.id}>
                  <ListItem />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default List;