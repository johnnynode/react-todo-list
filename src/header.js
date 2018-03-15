import React, {Component} from 'react';

class Header extends Component {
  static get defaultProps() {
    return {
      name: "Johnny",
      todoCount: 0
    }
  }
  
  render() {
    const {name, todoCount} = this.props;  
    return (
      <div>
        <h1>React's Basic TodoMVC</h1>
        <span>Hello {name} , you have {todoCount} books left to read!</span>
      </div>
    )
  }
}

export default Header;