<template>
  <h2>姓名：{{fullName}}</h2>
  <input type="text" v-model="fullName"/>
  <button @click="test">测试hello组件的事件</button>
  <h2>当前点击时鼠标的坐标为：x：{{td.point.x}}，y：{{td.point.y}}</h2>
  <h2>拿到的x：{{x}}拿到的y{{y}}</h2>
</template>

<script>
import {
  watch,
  reactive,
  computed,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted 
  } from "vue"
import usePoint from '../hooks/usePoint'
export default {
  name:'HelloWorld',
  emits: ['why'],  // 不写能执行，但是会报警告
  setup(props,context) {
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


    let {x,y} =  usePoint()
    let td = reactive({
      person:{
        firstName: 'Hello',
        lastName: 'World!'
      },
      point:usePoint()
    })
    
    function test(){
      context.emit('why',"emit的第二个参数作为 第一个函数的参数")
    }

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

    watch(
      td.person,
      ()=>{
        console.log('watch监听的person信息修改了！！！')
      },
       { immediate: true, deep: true }
    )
    watchEffect(()=>{
      //只要我这里面用到的数据发生变化 就会执行
      const fn = td.person.firstName
      console.log('watchEffect监听到修改了！')
    })

    return {
      td,
      test,
      fullName,
      x,
      y
    }
  }

}
</script>
