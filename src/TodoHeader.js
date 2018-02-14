import React, {Component} from 'react';

class TodoHeader extends Component {
  
  static get defaultProps() {
    return {
      name: "Joh",
      count: 0
    }
  }

  render() {
    const {name, count} = this.props;
    return (
      <div>
        <h1> Hello {name} you have {count} items left to be done!</h1>
      </div>
    )
  }
}

export default TodoHeader;