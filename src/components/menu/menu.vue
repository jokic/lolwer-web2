<template>
  <div class="menu">
    <router-link to="/video" class="menu-btn">视频</router-link>
    <router-link to="/match" class="menu-btn active">比赛</router-link>
    <router-link to="/user" class="menu-btn">个人</router-link>
  </div>
</template>

<script>

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
    .menu-btn{
      flex:1;
      text-decoration: none;
    }
    .menu-btn.active{
      background-color: $mc;
      color:#000;
    }
  }
</style>
