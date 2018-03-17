import React, {Component} from 'react';

import Input from './input';

class ListItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isEditing:false
    }
  }

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
  
  changeEditState () {
    this.setState({
      isEditing:!this.state.isEditing
    });
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

    // 模式的切换
    let bookHtml,
        isEditing = this.state.isEditing;

    if(isEditing) {
      bookHtml=
        <Input 
          autoFocus={true}
          defaultValue={content}
          style={{width:200,height:30,outline:"none"}}
          onBlur={
            () => {
              editItem(id);
              this.changeEditState();
            }
          }
        />
    }else{
      bookHtml =
        <span onDoubleClick={
          ()=>{
            this.changeEditState();
          }
        }>
          {content}
        </span>
    }

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
        {bookHtml}
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