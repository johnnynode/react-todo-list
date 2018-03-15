import React, {Component} from 'react';

class Input extends Component {
  static get defaultProps() {
    return {
      type: "text",
      style: {width:250,height:30,outline:"none"},
      placeholder: "Please input here ...",
      autoFocus: false,
      onKeyDown: () => {},
      onBlur: () => {},
      onChange: () => {}
    }
  }

  render() {
    return (
      <input {... this.props} />
    )
  }
} 

export default Input;