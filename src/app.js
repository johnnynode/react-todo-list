import React, {Component} from 'react';

import Header from './views/header';
import Input from './views/input';
import List from './views/list';

import Utils from './utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readList:[]
    }
  }

  render() {
    const {
      readList
    } = this.state;

    const leftCount = readList.filter((item) => !item.checked).length;

    return (
      <div>
        <Header name="John" leftCount={leftCount} />
        <Input 
          autoFocus={true} 
          style={{width:200,height:30,outline:"none"}}
          onKeyUp={
            (e)=>{
              let val = Utils.trim(e.target.value);
              if(val && e.keyCode === 13) {
                // update readList
                this.setState({
                  readList:Utils.addItem(readList,val)
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
          readList={readList} 
          toggleItemList={
            (id)=>{
              this.setState({
                readList:Utils.toggleItemList(readList,id)
              });
            }
          }
          editItemList={
            ()=>{

            }
          }
          delItemList={
            (id)=>{
              this.setState({
                readList:Utils.delItemList(readList,id)
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
    .then((readList) => {
      this.setState({
        readList
      })
    })
  }
}

export default App;