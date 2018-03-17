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
}

export default new Utils();