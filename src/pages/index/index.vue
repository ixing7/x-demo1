<template>
  <div class="home-wrap">

    <div class="home-pic">
      <div>
        第一格
        <a href="/pages/chat/main" @click="tiao('/pages/chat/main')" class="counter">去往聊天室</a>
      </div>
      <div>
        第二格
        <a href="/pages/mailList/main" @click="tiao('/pages/mailList/main')" class="counter">去往通讯录</a>
      </div>
      <div>
        第三格
        <a href="/pages/my/main" @click="tiao('/pages/my/main')" class="counter">我的</a>
      </div>
      <div>
        <a href="/pages/counter/main" class="counter">关于此小程序</a>
      </div>
    </div>

    <div class="usermotto">
<!--      <div class="user-motto">-->
<!--        <card :text="motto"></card>-->
<!--      </div>-->
    </div>
<!--    <map ></map>-->
<!--    <form class="form-container">-->
<!--      <input type="text" class="form-control" :value="motto" placeholder="v-model" />-->
<!--      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />-->
<!--      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />-->
<!--    </form>-->

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

<!--    <div class="all">-->
<!--&lt;!&ndash;        <div class="left">&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="right">&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--    </div>-->
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    tiao(url){
      wx.switchTab({url})
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="stylus">
.home-wrap
  background-color rgb(9,7,35)
.home-pic
  display flex
  flex-wrap wrap
  >div
    border 1px solid gray
    width 50%
    box-sizing border-box
    text-align center
</style>
