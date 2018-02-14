import React, {Component} from 'react';

import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    // 将数据存放在状态机中， 状态机改变, 自动刷新
    this.state = {};
  }

  render() {
    return (
      <div>
        <TodoHeader/>
        <TodoInput/>
        <TodoList/>
      </div>
    )
  }
}

export default TodoApp;