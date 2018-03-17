import React, {Component} from 'react';

import Input from './input';

class ListItem extends Component {
  static get defaultProps() {
    return {
      id:0,
      content:"default book name",
      checked:false,
      toggleItem:()=>{},
      editItem:()=>{},
      delItem:()=>{}
    }
  }
  render() {
    const {
      id,
      content,
      checked,
      toggleItem,
      editItem,
      delItem
    } = this.props;
    return (
      <div>
        <Input
          type="checkbox"
          style={{width:15,height:15,outline:"none"}}
          checked={checked}
          onChange={
            ()=>{
              toggleItem(id);
            }
          }
        />
        <span onDoubleClick={
          ()=>{
            editItem(id);
          }
        }>
          {content}
        </span>
        <button onClick={
          ()=>{
            delItem(id);
          }
        }>x</button>
      </div>
    )
  }
}

export default ListItem;