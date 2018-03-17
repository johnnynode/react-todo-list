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
        <h1>React's Basic Todo MVC</h1>
        <div style={{paddingBottom:10}}>Hello {name} , you have {todoCount} books left to read!</div>
      </div>
    )
  }
}

export default Header;