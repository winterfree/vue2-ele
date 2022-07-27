<template>
  <div class="category" v-if="foodTypes.length">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in foodTypes" :key="index">
        <router-link
          :to="{path: '/food', query: {geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}"
          v-for="foodItem in item"
          :key="foodItem.id"
          class="category__icons"
        >
          <div class="category__icons__wrapper">
            <img class="category__icons__wrapper__img" :src="imgBaseUrl + foodItem.image_url">
          </div>
          <p class="category__icons__desc">{{foodItem.title}}</p>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { msiteFoodTypes } from '@/api'

export default {
  name: 'Category',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      geohash: '', // city页面传递过来的地址geohash
      foodTypes: [], // 食品分类列表
      imgBaseUrl: 'https://fuss10.elemecdn.com', // 图片域名地址
      swiperOptions: {
        autoplay: false,
        loop: true
      }
    }
  },
  mounted () {
    // 获取导航食品类型列表
    msiteFoodTypes(this.geohash).then(res => {
      const resLength = res.length
      const resArr = [...res] // 返回一个新的数组
      const foodArr = []
      for (let i = 0, j = 0; i < resLength; i += 8, j++) {
        foodArr[j] = resArr.splice(0, 8)
      }
      this.foodTypes = foodArr
    })
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
.category >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.category__icons {
  position: relative;
  overflow: hidden;
  float: left;
  width: 20%;
  height: 0;
  padding-bottom: 25%;
  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: px2rem(22);
    box-sizing: border-box;
    padding: px2rem(13);
    &__img {
      display: block;
      margin: 0 auto;
      height: 100%
    }
  }
  &__desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: px2rem(7);
    height: px2rem(22);
    line-height: px2rem(22);
    color: #666666;
    text-align: center;
    font-size: px2rem(13);
    @include ellipse();
  }
}
</style>
