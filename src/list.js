import React, {Component} from 'react';

import ListItem from './list-item';

class List extends Component {
  static get defaultProps() {
    return {
      bookList:[],
      toggleItemList:()=>{},
      delItemList:()=>{},
      editItemList:()=>{}
    }
  }

  render() {
    const {
      bookList,
      toggleItemList,
      delItemList,
      editItemList
    } = this.props;
    return (
      <div>
        <ul>
          {
            bookList.map((book) => {
              return (
                <li key={book.id}>
                  <ListItem 
                    id={book.id} 
                    content={book.content} 
                    checked={book.checked} 
                    toggleItem={(id) => {
                      toggleItemList(id);
                    }}
                    delItem={(id) => {
                      delItemList(id);
                    }}
                    editItem={(id, content) => {
                      editItemList(id, content);
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