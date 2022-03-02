#记录学习vue3

一、使用
 1.使用vue-cli闯将
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建Vue项目，选择Vue3
vue create vue_test
## 启动
cd vue_test
npm run serve

 2.使用vite创建
## 创建工程
npm init vite-app yk_vue3
## 进入工程目录
cd yk_vue3
## 安装依赖
npm install
## 运行
npm run dev

二 Composition API

常用的 Composition API
1.setup：配置数据、方法
  setup() {
    //数据
    let name = '土豆''
    //方法
    function showInfo(){
      alert(`你好${name}!!`)
    }
    return{
      name,age,gender,showInfo
    }
  }
注意：不和vue2的配置混用,不能是一个异步函数
2.ref
定义响应式数据
  let name = ref('土豆')
js中操作数据
 name.value = '一年后的土豆'
 模板中读取数据
<h2>姓名:{{name}}</h2>

3.reactive函数
● 作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用ref函数）
● 语法：const 代理对象= reactive(源对象)接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）
● reactive定义的响应式数据是“深层次的”。
● 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

4.computed 计算属性
    let fullName = computed({
      get(){
        console.log('get执行了')
        return td.person.firstName+'-'+td.person.lastName
      },
      set(value){
         console.log('set执行了')
           const nameArr = value.split('-')
            td.person.firstName = nameArr[0]
            td.person.lastName = nameArr[1]
      }
    })
5.侦听属性
    watch(
      td.person,
      ()=>{
        console.log('信息修改了！！！')
      },
      //immediate 是否初始就执行 deep 发现内部值得变化
       { immediate: true, deep: true }
    )


