import React, {Component} from 'react';

import ListItem from './list-item';

class List extends Component {
    static get defaultProps() {
      return {
        bookList:[],
        toggleItemList:()=>{},
        editItemList:()=>{},
        delItemList:()=>{}
      }
    }
    // bookList
    render() {
      const {
        bookList,
        toggleItemList,
        editItemList,
        delItemList
      } = this.props;
      return (
        <ul>
          {
            bookList.map((item)=>{
              return(
                <li key={item.id}>
                  <ListItem
                    id={item.id}
                    content={item.content}
                    checked={item.checked}
                    toggleItem={
                      ()=>{
                        toggleItemList();
                      }
                    }
                    editItem={
                      ()=>{
                        editItemList();
                      }
                    }
                    delItem={
                      ()=>{
                        delItemList();
                      }
                    }
                  />
                </li>
              );
            })
          }
        </ul>
      )
    }
}

export default List;