import React, {Component} from "react";

import Input from './input';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing:false
    };
  }

  static get defaultProps() {
    return {
      content:"default book name",
      checked: false,
      id:0,
      toggleItem:()=>{},
      delItem:()=>{},
      editItem:()=>{}
    }
  }

  changeEditState = () => {
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
      delItem,
      editItem
    } = this.props;

    let isEditing = this.state.isEditing,
        bookHtml;

    // 两种模式的切换
    if (isEditing) {
      bookHtml =
        <Input 
          autoFocus={true}
          style={{width:100,height:30}}
          defaultValue={content}
          onBlur={
            (e)=>{
              editItem(id, e.target.value);
              this.changeEditState();
            }
          }
          onKeyDown={
            (e)=> {
              var val = e.target.value; // 备注：此处没有进行trim处理
              if(e.keyCode === 13 &&  val!== "") {
                editItem(id, val);
                this.changeEditState();
              }
            }
          }
        />
    } else {
      bookHtml = 
        <span onDoubleClick={
          () => {
            this.changeEditState();
          }
        }>{content}</span>;
    }

    return (
      <div>
        <Input 
          type="checkbox"
          checked={checked}
          style={{width:15,height:15}}
          onChange={()=>{
            toggleItem(id)
          }} 
        />
        {bookHtml}
        <button onClick={
          () => {
            delItem(id);
          }
        }>x</button>
      </div>
    )
  }
}

export default ListItem;