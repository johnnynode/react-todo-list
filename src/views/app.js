import React, {Component} from 'react';
import Utils from '../utils';
import Header from './templates/header';
import Input from './templates/input';
import List from './templates/list';

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
          autoFocus={true} 
          style={{width:250,height:30,outline:"none",margin:"10px 0",paddingLeft:5}} 
          onKeyUp={
            (e)=>{
              let val = Utils.trim(e.target.value);
              if(val && e.keyCode === 13) {
                this.setState({
                  bookList:Utils.addItem(bookList,val)
                })
                e.target.value = "";
              }
              if(!val && e.keyCode === 13) {
                e.target.value = "";
              }
            }
          }
        />
        <List 
          bookList={bookList} 
          toggleItemList={
            (id)=>{
              this.setState({
                bookList:Utils.toggleItemList(bookList,id)
              });
            }
          }
          editItemList={
            (id,val)=>{
              this.setState({
                bookList:Utils.editItemList(bookList,id,val)
              })
            }
          }
          delItemList={
            (id)=>{
              this.setState({
                bookList:Utils.delItemList(bookList,id)
              })
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