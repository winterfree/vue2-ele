<template>
  <div>
    <Header />
    <Banner :list="swiperList" />
    <Category />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Banner from './components/Banner'
import Category from './components/Category'
import Footer from '@/components/footer/Footer'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MSite',
  components: {
    Header,
    Banner,
    Category,
    Footer
  },
  mounted () {
    this.getMSiteSwiperList()
  },
  methods: {
    ...mapActions([
      'getMSiteSwiperList'
    ])
  },
  computed: {
    ...mapState([
      'swiperList'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
