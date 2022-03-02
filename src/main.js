//引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// 创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)
// 并挂载
createApp(App).mount('#app')
console.log(createApp(App))