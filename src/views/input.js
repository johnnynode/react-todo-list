import React, {Component} from 'react';

class Input extends Component {
  static get defaultProps() {
    return {
      placeholder:"",
      type:"text",
      checked:false
    }
  }

  render() {
    return (
      <input {... this.props} />
    )
  }
}

export default Input;