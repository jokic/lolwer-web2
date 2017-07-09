<template>
  <div>
  	<div v-if="getting">
  		正在加载...
  	</div>
  	<div v-else>	
  		<game v-for='macth in schedule' v-bind:game='macth' :key='macth.scheduledTime'></game>	
  	</div>		
  </div>
</template>

<script>
import game from "../../../components/game/game"
export default {
 data(){
 	return{
 		schedule:[],
 		getting: true
 	}
 },	
 methods:{
 	update:function () {
 		this.$http.get('http://api.lolesports.com/api/v1/scheduleItems?leagueId=7').then(data=>{
 			let res = data.body;
 			let tsDate = [];
 			for (var i = 0; i < res.scheduleItems.length; i++) {
 				if (res.scheduleItems[i].tournament != '465a2d10-2a73-43cb-a627-f0c87b564f06') {
 					continue
 				}
 				//获取每场match的信息
 				let match = { 
 					match : res.scheduleItems[i].match,
 					tournament : res.scheduleItems[i].tournament,
 					bracket : res.scheduleItems[i].bracket,
 					scheduledTime: res.scheduleItems[i].scheduledTime,
 					time : Date.parse(new Date(res.scheduleItems[i].scheduledTime))
 					}
 				tsDate.push(match);
 			}
 			//循环match找到对应的game
 			for (var i = 0; i < tsDate.length; i++) {
 				for (var j = 0; j < res.highlanderTournaments.length; j++) {
 					//匹配到对应的联赛
 					if(res.highlanderTournaments[j].id == tsDate[i].tournament){
 						//获取联赛描述
 						tsDate[i].description = res.highlanderTournaments[j].description;
 						//match为对应的比赛
 						let match = res.highlanderTournaments[j].brackets[tsDate[i].bracket].matches[tsDate[i].match];
 						//teams为队伍信息
 						let teams = [];
 						//获取队伍信息
 						for (var t = 0; t < match.input.length; t++) {
 							var team = {};
 							team.team = match.input[t].roster;
 							team.score = 0;
 							if (team.team) {
 								//匹配队伍名字
 								team.name = res.highlanderTournaments[j].rosters[team.team].name;
 								//匹配队伍logo地址
 								for (var l = 0; l < res.teams.length; l++) {
 									if(res.teams[l].acronym == team.name){
 										team.logo = res.teams[l].logoUrl;
 										break
 									}
 								}
 							}
 							teams.push(team);
 						}
 						let name = match.name;
 						let games = match.games;
 						let closed = false;
 						if (match.standings) {
 							closed = match.standings.closed;
 						}
 						let game = [];
 						//获取每个match的game信息
 						for(var g in games){
 							var sGame = {
 								id: games[g].id,
 								name: games[g].name,
 							}
 							if (games[g].standings) {
 								sGame.winner = games[g].standings.result[0][0].roster;
 								if (sGame.winner == teams[0].team) {
 									teams[0].score++;
 								}else{
 									teams[1].score++;
 								}
 							}
 							game.push(sGame);
 						}
 						tsDate[i].name = name;
 						tsDate[i].game = game;
 						tsDate[i].closed = closed;
 						tsDate[i].teams = teams;
 						tsDate[i].type="中国LPL联赛";
 						break
 					}
 				}
 			}
 			//按时间排序
 			tsDate.sort(function (a,b) {
 				return a.time - b.time
 			})
 			this.schedule= tsDate;
 			this.getting =false;
 		})
 	}
 },
 created:function () {
 	this.update();
 },
 components:{
 	game
 }
}
</script>

<style lang='scss' scope>
</style>
