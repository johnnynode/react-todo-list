class Utils {
  trim(str) {
    return typeof str === 'string' ? str.replace(/^\s+|\s+$/g, "") : "";
  }
  addItem(context, val){
    let index = context.length ? context[context.length -1].id - 0 + 1 : 1;
    let json = {
      id:index,
      content:val,
      checked:false
    };
    context.push(json);
    return context;
  }
  toggleItemList(context,id) {
    let target = context.find((item)=>{
      return item.id === id;
    });
    target.checked = !target.checked;
    return context;
  }
  editItemList(context,id,val) {
    let target = context.find((item)=>{
      return item.id === id;
    });
    target.content = val;
    return context;
  }
  delItemList(context,id) {
    let index = context.findIndex((item)=>{
      return item.id === id;
    });
    (index !== -1) && context.splice(index, 1);
    return context;
  }
}

export default new Utils();