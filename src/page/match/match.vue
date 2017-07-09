<template>
  <div>	
  	<div class="list">	
	  	<router-link to="/match/all">RIFT</router-link>
	  	<router-link to="/match/lpl">LPL</router-link>
	  	<router-link to="/match/lck">LCK</router-link>
	  	<router-link to="/match/nalcs">NALCS</router-link>
  	</div>
  	<router-view></router-view>
  </div>
</template>

<script>
import game from '../../components/game/game'
export default {
 data(){
 	return {
 		schedule:[],
 		getsuccess:false
 	}
 },
 components:{
 	game
 }
}
</script>
<style lang='scss' scope>
.list{
	height: 1.5rem;
	line-height: 1.5rem;
	a{
		display: inline-block;
		height: 1rem;
		line-height: 1rem;
		text-decoration: none;
		background-color: #000;
		color: #fff;
		font-size: 0.8rem;
		padding: 0.05rem 0.5rem;
		border-radius: 0.5rem;
		border: 0.02rem solid #ddab3e;
	}
}
</style>
