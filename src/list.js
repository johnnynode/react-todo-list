import React, {Component} from 'react';

import Input from './input';

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
             <Input 
              type="checkbox"
              checked={false}
              style={{width:15,height:15}}
            />
             <span>book 1</span>
             <button>x</button>
          </li>
          <li>
             <Input 
                type="checkbox"
                checked={false}
                style={{width:15,height:15}}
              />
             <span>book 2</span>
             <button>x</button>
          </li>
          <li>
             <Input 
                type="checkbox"
                checked={false}
                style={{width:15,height:15}}
              />
             <span>book 3</span>
             <button>x</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default List;