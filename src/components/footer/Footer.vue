<template>
  <div class="footer">
    <TabBar :data="tabbarData"/>
  </div>
</template>

<script>
import TabBar from '../common/Tabbar'
export default {
  name: 'Footer',
  components: {
    TabBar
  },
  data () {
    return {
      tabbarData: [
        { text: '外卖', icon: '&#xe600;', path: '/msite' },
        { text: '发现', icon: '&#xe6c6;', path: '/find' },
        { text: '订单', icon: '&#xe90c;', path: '/order' },
        { text: '我的', icon: '&#xe614;', path: '/profile' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
