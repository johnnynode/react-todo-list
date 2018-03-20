import React, {Component} from 'react';

class List extends Component {
    static get defaultProps() {
      return {
        bookList:[]
      }
    }
    // bookList
    render() {
      const {
        bookList
      } = this.props;
      return (
        <ul>
          {
            bookList.map((item)=>{
              return(
              <li key={item.id}>{item.content}</li>
              );
            })
          }
        </ul>
      )
    }
}

export default List;