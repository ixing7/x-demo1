<template>
  <div>
    <div v-for="message in content">
      <p>1</p>
      <p>{{message.content}}</p>
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
      content:[
        {name:'小a',
          content:'this is first message',
          time:'2019-07-03:16:47',
          icon:'q1233'
        },
        {name:'小q',
          message:'this is second message',
          time:'2019-07-03:16:47',
          icon:'q1234'
        }
      ]
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

<style>
</style>
