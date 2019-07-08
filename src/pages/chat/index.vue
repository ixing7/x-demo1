<template>
  <div>
    <div v-for="(m,index) in content" :key="index">
      <div :class="{userInfo:true,mym:m.userId===user.id}">
        <p>{{m.icon}}{{m.name}}</p>
        <p class="message-body">{{m.message}}</p>
      </div>
    </div>
    <div class="edit">
      <button>语音</button>
      <input :cursor-spacing="pageConfig.cursorSpacing" type="text" class="text">
      <button @click="sendM()">发送</button>
    </div>

  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      pageConfig:{
        cursorSpacing:30 //键盘距离input的距离
      },
      user:{
        id:'id005',
        name:'xing'
      },
      content:[
        {name:'小a',
          userId:'id007',
          message:'this is first message',
          time:'2019-07-03:16:47',
          icon:'q1233'
        },
        {name:'小q',
          userId:'id003',
          message:'this is second message',
          time:'2019-07-03:16:47',
          icon:'q1234'
        },
        {name:'小x',
          userId:'id005',
          message:'this is three message',
          time:'2019-07-03:16:47',
          icon:'q1234',
        },
      ]
    }
  },
  methods:{
      sendM:function(){
        console.log(this);
      }
  },
  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style lang="stylus" scoped>
.mym
  text-align right
  padding-left 10%
.message-body
  border 1px deeppink solid
.edit
  width 100%
  padding 5px
  background-color black
  display flex
  position: fixed
  justify-content space-between
  bottom  0
  button
    height 30px
    font-size 18px
    line-height 30px
  .text
    background-color white
    height 30px
    border-radius 11rpx
    color black
</style>
