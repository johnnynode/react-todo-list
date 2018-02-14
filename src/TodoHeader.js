import React, {Component} from 'react';

class TodoHeader extends Component {
  
  static get defaultProps() {
    return {
    }
  }

  render() {
    console.log('I am header!');
    return (
      <div>
        <h1>I am header!</h1>
      </div>
    )
  }
}

export default TodoHeader;