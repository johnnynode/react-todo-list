import React, {Component} from 'react';

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
                  <span>{item.content}</span>
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