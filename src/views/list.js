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
                  <ListItem 
                    id={item.id}
                    content={item.content}
                    checked={item.checked}
                    toggleItem={()=>{
                      console.log('1');
                    }}
                    editItem={()=>{
                      console.log('2');
                    }}
                    delItem={()=>{
                      console.log('3');
                    }}
                  />
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