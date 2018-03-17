import React, {Component} from 'react';

class Input extends Component {
  static get defaultProps() {
    return {
      placeholder:"",
      type:"text",
      checked:false,
      autoFocus:false,
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