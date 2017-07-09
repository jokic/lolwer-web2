<template>
  <div class="game">
    <div class="content">
      <div class="team">
        <div>
          <img :src="game.teams[0].logo" alt="">
          <p v-text="game.teams[0].name ? game.teams[0].name:'待定'">SKTelecom T1</p>
        </div>
      </div>
      <div class="match-info">
        <p class="game-type">{{game.type}}</p>
        <p class="score"><span v-text='game.teams[0].score'>0</span>:<span v-text='game.teams[1].score'>0</span></p>
        <p class="state end" v-if="game.closed">已结束</p>
        <p class="state coming" v-else>未开始</p>
        <p class="begin-time">{{game.scheduledTime| time}}</p>
      </div>
      <div class="team">
        <div>
          <img :src="game.teams[1].logo" alt="">
          <p v-text="game.teams[1].name ? game.teams[1].name:'待定'">SKTelecom T1</p>
        </div>
      </div>
    </div>
    <div class="ctrl">
      <div>点赞</div>
      <div>比赛详情</div>
      <div>评论</div>
    </div>
  </div>
</template>

<script>
export default {
   data(){
    return{
    }
  }, 
   props:['game']
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $mc:#ddab3e;
  .game{
    display:flex;
    flex-direction:column;
    height: 6rem;
    background-color: #000;
    margin-bottom: 0.1rem;
    .content{
      flex:1;
      display:flex;
      .team{
        flex:4;
        display:flex;
        align-items: center;
        div{
          width: 100%;
          img{
            height: 2.5rem;
            vertical-align: middle;
          }
          p{
            color:#fff;
            height: 0.8rem;
            font-size:0.5rem;
            line-height: 0.8rem;
            vertical-align: middle;
          }
        }
      }
      .match-info{
        flex:3;
        .game-type{
          font-size:0.5rem;
          font-weight: 600;
          color:$mc;
        }
        .score{
          color:#fff;
          font-size:2rem;
          font-weight: 600;  
        }
        .state{
          font-size:0.5rem;
        }
        .state.coming{
          color:#a3a3a3;
        }
        .state.playing{
          color:#2be400;
        }
        .state.end{
          color:#fff;
        }
        .begin-time{
          color:#fff;
          font-size:0.6rem;
          font-weight: 600;   
        }
      }
    }
    .ctrl{
      border-top: 0.01rem solid $mc;
      height: 1rem;
      display:flex;
      line-height: 1rem;
      div{
        flex:1;
        font-size:0.4rem;
        font-weight: 600;
        color:$mc;
      }
    }
  }
</style>
