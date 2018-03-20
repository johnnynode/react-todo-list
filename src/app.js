import React, {Component} from 'react';

import Header from './views/header';
import Input from './views/input';
import List from './views/list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList : []
    }
  }

  render() {
    const {
      bookList
    } = this.state;

    let bookLeft = bookList.filter((item)=>!item.checked).length;
    return (
      <div>
        <Header name="John" bookLeft={bookLeft} />
        <Input 
          style={{width:250,height:30,outline:"none",margin:"10px 0",paddingLeft:5}} 
        />
        <List 
          bookList={bookList} 
          toggleItemList={
            ()=>{
              console.log('toggle');
            }
          }
          editItemList={
            ()=>{
              console.log('edit');
            }
          }
          delItemList={
            ()=>{
              console.log('del');
            }
          }
        />
      </div>
    )
  }

  componentWillMount() {
    fetch('books.json')
    .then((data) => {
      return data.json();
    })
    .then((bookList) => {
      this.setState({
        bookList
      })
    })
  }
}

export default App;