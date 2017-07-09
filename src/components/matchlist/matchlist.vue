<template>
  <div>	
  	列表
  	<game v-for='macth in sche' v-bind:game='macth'></game>	
  </div>
</template>

<script>
import game from "../../components/game/game"
export default {
 data(){
 	return{
 	}
 },	
 components:{
 	game
 },
 props:['sche']
}
</script>

<style lang='scss' scope>
</style>
