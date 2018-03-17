import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  <div>
    <div>
      <h1>React's Basic Todo List</h1>
      <div>Hello John , you have 3 books left to read!</div>
    </div>  
    <div>
      <input placeholder="请添加书籍..." />
    </div>
    <div>
      <ul>
        <li>book1</li>
        <li>book2</li>
        <li>book3</li>
      </ul>
    </div>
  </div>,
  document.getElementById("root")
)