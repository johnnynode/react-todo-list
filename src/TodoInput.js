import React, {Component} from 'react';

class TodoInput extends Component {
  static get defaultProps() {
    return {
    }
  }

  render() {
    console.log('I am Input');
    return (
      <input />
    )
  }
}

export default TodoInput;