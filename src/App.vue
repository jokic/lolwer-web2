<template>
  <div id="app">
    <div class="head-top">     
      <head-top v-bind:class="{hide:menuHide}"></head-top>
    </div>
    <router-view></router-view>
    <menu-bot v-bind:class="{hide:menuHide}"></menu-bot>
  </div>
</template>

<script>
import headTop from './components/header/header'
import menuBot from './components/menu/menu'
export default {
  data(){
    return{
      menuHide:false,
      oldOST:0
    }
  },
  methods:{
    scroll:function (e) {
      var newOST = e.srcElement.scrollingElement.scrollTop;
      if (newOST>this.oldOST) {
        this.menuHide = true;
      }else{
        this.menuHide = false;
      }
      this.oldOST = newOST;
    }
  },
 components:{
  headTop,
  menuBot
 },
 mounted(){
  window.addEventListener('scroll', this.scroll)
 }
}
</script>

<style lang='scss'>
@import './style/common';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .head-top{
    height: 2.2rem;
  }
}
</style>
