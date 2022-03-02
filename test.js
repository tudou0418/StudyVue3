let person ={
    name:'小土豆',
    age:18
  }
//第一个参数 为拦截对象，第二个参数为定制拦截行为，外界对该对象的访问，都必须先通过这层拦截
const p  = new Proxy(person,{
  //方法用于拦截对象的读取属性操作。
  get(target,propName){
    console.log(`有人读取了person身上的${propName}属性`)
    //获取对象身上某个属性的值，类似于 target[name]。
    return  Reflect.get(target,propName)
  },
  //有人修改p的某个属性、或给p追加某个属性时调用
  set(target,propName,value){
    console.log(`有人修改了p身上的${propName}属性，我要去更新界面了！`)
        // target[propName] = value
    return Reflect.set(target,propName,value)
  },
//有人删除p的某个属性时调用
  deleteProperty(target,propName){
    console.log(`有人删除了p身上的${propName}属性，我要去更新界面了！`)
    // return delete target[propName]
      return Reflect.deleteProperty(target,propName)
  }
})
person.name