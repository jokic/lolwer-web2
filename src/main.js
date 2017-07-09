// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import './config/rem'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.filter('time',function (val) {
	var time = val;
	time = time.replace("-\g"," ");
	time = time.replace("T"," ");
	time = time.substring(0,19);
	var date = new Date(time);
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var H = date.getHours();
    var i = date.getMinutes();
    var s = date.getSeconds();
    if (d < 10) {
        d = '0' + d;
    }
    if (H < 10) {
        H = '0' + H;
    }
    if (i < 10) {
        i = '0' + i;
    }
    if (s < 10) {
        s = '0' + s;
    }
    var t = m + '月' + d + '日 ' + H + ':' + i;
    return t;
})
var myFilter = Vue.filter('time')