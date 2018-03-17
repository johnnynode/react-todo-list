class Utils {  
  // 去除字符串内的空白
  trim(str) {
    return typeof str === 'string' ? str.replace(/^\s+|\s+$/g, "") : "";
  }

  // toggle 特定一项
  toggleItemList(todos, id) {
    let target = todos.find((todo) => {
      return todo.id === id;
    });
    target.checked = !target.checked;
    return todos;
  }

  // 删除特定一项
  delItemList(todos, id) {
    let index = todos.findIndex((todo) => {
      return todo.id === id;
    });

    // 按照索引进行删除
    (index !== -1) && todos.splice(index, 1);
    return todos;
  }

  // 新增代办事项
  createItem(todos, val){
    let index = todos.length ? todos[todos.length -1].id - 0 + 1 : 1;
    let json = {
      id:index,
      content:val,
      checked:false
    };
    todos.push(json);
    return todos;
  }

  // 编辑列表
  editItemList (todos, id, content) {
    let target = todos.find((todo) => {
      return todo.id === id;
    });
    target.content = content;
    return todos;
  }
}  

export default new Utils();