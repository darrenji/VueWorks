import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './router.js'

//import checkbox from 'iview/src/components/checkbox'
//按需引用需要导入样式，import 'iview/dist/styles/iview.css'
//按需引用是直接引用组件库源代码，所以需要babel进行编译，需要在webpack中配置
//webpack中的配置如下：{ test: /iview.src.*?js$/, loader: 'babel-loader' },

//使用属性传递数字、布尔或函数时，需要带:,比如：<Page :current="1" :total="100"></Page>

//在template/render模式下和CDN引用时，组件的名称是不一样的：Button(i-button),Col(i-col),Table(i-table), Input(i-input), Form(i-form),Menu(i-menu), Select(i-select), Option(i-option),Progress(i-progress)
//而有些组件在所有模式下必须使用i-前缀，除非使用iview-loader:Switch,i-switch;Circle,i-circle
import iView from 'iview'
import 'iview/dist/styles/iview.css'

//定制主题
//1 通过自建一个less文件进行变量覆盖
//import './my-theme/index.less';
//默认的样式变量在这里：https://github.com/iview/iview/blob/master/src/styles/custom.less
//2 还可以通过iview提供的工具iveiw-theme来修改
//npm install iview-theme -g
//使用iview-theme init my-theme命令创建一个my-theme目录，会在my-theme多了一个custom.less
//修改完后使用iview-theme build -o dist/编译成iview.css文件
//然后就是引用import './my-theme/dist/iview.css';

//iview-loader 所有标签都可以使用首字母大写的形式
//参数 prefix 设置为 true 后，所有 iView 组件标签名都可以使用前缀 i-，例如 <i-row>、<i-select>


//24栅格
//row col span


Vue.use(VueRouter)
Vue.use(iView)

//路由配置
const RouterConfig = {
    routes: routes
};
const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
