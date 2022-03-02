#记录学习vue3

# 一、使用
 1. 使用vue-cli闯将
 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
- 安装或者升级你的@vue/cli
npm install -g @vue/cli
-  创建Vue项目，选择Vue3
vue create vue_test
- 启动
cd vue_test
npm run serve

 2. 使用vite创建
- 创建工程
npm init vite-app yk_vue3
- 进入工程目录
cd yk_vue3
- 安装依赖
npm install
- 运行
npm run dev

# 二 Composition API

常用的 Composition API
## 1.setup：配置数据、方法
```javascript
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
```
注意：不和vue2的配置混用,不能是一个异步函数
## 2.ref
定义响应式数据
  let name = ref('土豆')
js中操作数据
 name.value = '一年后的土豆'
 模板中读取数据
 ```javascript
<h2>姓名:{{name}}</h2>
```
## 3.reactive函数
  - 作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用ref函数）
  - 语法：const 代理对象= reactive(源对象)接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）
  - reactive定义的响应式数据是“深层次的”。
  - 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

## 4.computed 计算属性
```javascript
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
```
## 5.侦听属性
```javascript
    watch(
      td.person,
      ()=>{
        console.log('信息修改了！！！')
      },
      //immediate 是否初始就执行 deep 发现内部值得变化
       { immediate: true, deep: true }
    )
        watchEffect(()=>{
      //只要我这里面用到的数据发生变化 就会执行
      const fn = td.person.firstName
      console.log('watchEffect监听到修改了！')
    })
```
## 6.声明周期
```javascript
    onBeforeMount(()=>{
         console.log('--onBeforeMount--组件渲染到页面就会执行')
    })
    onMounted(()=>{
        console.log('--onMounted -- 组件渲染到页面 之后 执行')
    })
    onBeforeUpdate(()=>{
      console.log('--onBeforeUpdate-- data数据发生变化就执行')
    })
    onUpdated(()=>{
      console.log('onUpdated-- 数据变化，页面重新渲染后 执行')
    })
    onBeforeUnmount(()=>{
      console.log('--onBeforeUnMount-- vue实例损毁前 执行')
    })
    onUnmounted(()=>{
      console.log('--onBeforeUnMount-- vue实例失效 dom完全损毁自动执行函数')
    })
```
### 7.自定义hook
 1. 创建hooks文件夹（创建js文件 文件名作为被引用的方法名）
 2. 引用改方法 可以通过该方法访问里面的属性和方法
 ```javascript
 import usePoint(文件名) from 'hook文件路径'
 ```
 ### ref toRef toRefs
 - ref 创建响应式对象 有一个指向内部的value 本质是拷贝 影响视图（响应式） 不会影响原始数据
 - toRef、toRefs 本质是引用 影响数据 但是不会影响视图
 - toRef(对象,对象的属性) 将单个属性 转为ref
 - toRefs(对象) 讲对象中的所有属性 转为ref
 - 通过reactive给【对象】添加响应式状态或者通过ref给【数据】添加响应式状态，然后利用toRef和toRef来引用原始数据 达到 【改变原始数据】并且响应式的更新视图的作用
 
 **尽量不要混着用，reactive 和 ref 选一种，toRef 和 toRefs 选一种，不然代码会很乱**






