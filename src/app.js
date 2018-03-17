import React, {Component} from 'react';

import Header from './views/header';
import Input from './views/input';
import List from './views/list';

import Util from './utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
  }

  render() {
    const {bookList} = this.state;
    const todoCount = bookList.filter((item) => !item.checked).length;
    return (
      <div>
        <Header name="John" todoCount={todoCount} />
        <Input  
          type='text' 
          placeholder="Please input here ..." 
          autoFocus={true}
          onKeyDown={
            (e) => {
              var val =  Util.trim(e.target.value);
              // 正常新增
              if(e.keyCode === 13 && val) {
                // 设置状态机
                this.setState({
                  bookList: Util.createItem(bookList, val)
                });
                e.target.value = ""; // 清空原值
              }

              // 空值回车的处理
              if(e.keyCode === 13 && !val) {
                e.target.value = ""; // 清空原值
              }
            }
          }
        />
        <List bookList={bookList} />
      </div>
    );
  }

  componentDidMount() {
    fetch('books.json')
    .then((data)=>{
      return data.json();
    })
    .then((bookList)=>{
      this.setState({
        bookList
      });
    })
  }
}

export default App;