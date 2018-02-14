import React, {Component} from 'react';

class TodoInput extends Component {
  static get defaultProps() {
    return {
      type: "text",
      style: {width:300,height:30},
      placeholder: "please input your new todo task ...",
      autoFocus: false,
    }
  }

  render() {
    console.log('I am Input');
    return (
      <input {... this.props}/>
    )
  }
}

export default TodoInput;