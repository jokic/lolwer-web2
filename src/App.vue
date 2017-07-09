<template>
  <div id="app">
    <div class="head-top">     
      <head-top></head-top>
    </div>
    <router-view></router-view>
    <menu-bot></menu-bot>
  </div>
</template>

<script>
import headTop from './components/header/header'
import menuBot from './components/menu/menu'
export default {
  data(){
    return{}
  },
 components:{
  headTop,
  menuBot
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
