<template>
  <div class="menu">
    <div class="menu-btn" v-bind:class='{active:video}' @click="checkedActive('video')">
      <router-link to="/video">视频</router-link>
    </div>
    <div class="menu-btn" v-bind:class='{active:match}' @click="checkedActive('match')">
      <router-link to="/match">比赛</router-link>
    </div>
    <div class="menu-btn" v-bind:class='{active:user}' @click="checkedActive('user')">
      <router-link to="/user">个人</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      video:false,
      match:true,
      user:false
    }
  },
  methods:{
    checkedActive:function (n) {
      this.video=false;
      this.match=false;
      this.user=false;
      this[n] = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $mc:#ddab3e;
  .menu {
    position: fixed;
    border-top: 0.05rem solid $mc;
    color:$mc;
    bottom:0px;
    width: 100%;
    height: 2.2rem;
    background-color: #000;
    line-height: 2.2rem;
    font-size: 0.6rem;
    font-weight: 600;
    display:flex; 
    transition:all .5s linear;
    .menu-btn{
      flex:1;
      a{
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: $mc;
      }
    }
    .menu-btn.active{
      a{
        color: #000;
      }
      background-color: $mc;
      color:#000;
    }
  }
</style>
