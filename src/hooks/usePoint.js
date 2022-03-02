/* 
 文件名 就是我们要复用的方法名
*/
import {reactive,onMounted,onBeforeUnmount} from 'vue'

export default function(){
    //定义鼠标的坐标
    let point = reactive({
            x:10,
            y:10
    })
    //鼠标打点相关方法
    function savePoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(event.pageX,event.pageX)
    }

    //相关生命周期钩子 组件渲染到页面
    onMounted(()=>{
        window.addEventListener("click",savePoint)
    })
    //损毁前
    onBeforeUnmount(()=>{
        window.removeEventListener("click",savePoint)
    })
    return point;
}