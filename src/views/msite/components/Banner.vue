<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide class="swiper-position" v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Banner',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
.wrapper >>> .swiper-pagination-bullet-active {
    background: #EAFFFF
  }
  .wrapper {
    overflow: hidden;
    background: #fff;
    margin-top: px2rem(7);
    .swiper-position {
      overflow: hidden;
      width: px2rem(350);
      height: px2rem(102);
      .swiper-img {
        overflow: hidden;
        width: px2rem(350);
        height: px2rem(90);
        border-radius: px2rem(5);
        @include center;
      }
    }
  }
</style>
