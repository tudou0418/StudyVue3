<template>
<h1>Personal information</h1>
<HelloWorld @why="sayHello" msg="你好!！" school="米花"></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  setup() {
    function sayHello(value){
      alert(`你在hello,触发了hello事件,收到的参数是${value}`)
    }
    return{
      sayHello
    }
  },
  components:{ HelloWorld}
}

</script>
