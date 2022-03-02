<template>
  <h2>姓名：{{fullName}}</h2>
  <input type="text" v-model="fullName"/>
  <button @click="test">测试hello组件的事件</button>
</template>

<script>
import { watch,reactive,computed } from "vue"
export default {
  emits: ['why'],  // 不写能执行，但是会报警告
  setup(props,context) {
    let td = reactive({
      person:{
        firstName: 'Hello',
        lastName: 'World!'
      }
        
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
        console.log('信息修改了！！！')
      },
       { immediate: true, deep: true }
    )

    return {
      td,
      test,
      fullName
    }
  }

}
</script>
