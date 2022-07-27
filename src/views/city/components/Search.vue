<template>
  <div>
    <div class="search">
      <div class="search__wrapper">
        <i class="iconfont search__wrapper__icon">&#xe729;</i>
        <input
          v-model="keyword"
          class="search__wrapper__input"
          type="text"
          placeholder="输入城市名或拼音"
        />
      </div>
      <span class="search__clear" @click="clean">取消</span>
    </div>
    <div class="both-height"></div>
    <div
      class="city"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="city__item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          <span class="city__item__list">{{item.name}}</span>
        </li>
        <li class="city__item city__none" v-show="hasNoData">
          <img src="@/assets/images/status/cp_no_address.png" alt="">
          <span class="city__none__content">没找到相关城市</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    groupcity: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    clean () {},
    ...mapMutations(['CHANGE_CITY'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.groupcity) {
          this.groupcity[i].forEach(value => {
            if (value.pinyin.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
.both-height {
  height: px2rem(80);
}
.search {
  position: fixed;
  left: 0;
  right: 0;
  padding: px2rem(20) px2rem(10) 0 px2rem(10);
  background-color: #FFFFFF;
  &::after {
    position: absolute;
    top: px2rem(72);
    left: 0;
    right: 0;
    height: px2rem(1);
    content: '';
    background-color: #EEEEEE;
  }
  &__wrapper {
    background: #F5F5F5;
    width: px2rem(300);
    height: px2rem(40);
    border-radius: px2rem(20);
    box-sizing: border-box;
    line-height: px2rem(40);
    margin-bottom: px2rem(9);
    font-size: px2rem(16);
    display: inline-block;
    &__icon {
      font-size: px2rem(15);
      color: #878787;
      margin-left: px2rem(25);
    }
    &__input {
      margin-left: px2rem(5);
    }
  }
  &__clear {
    display: inline-block;
    margin-left: px2rem(10);
    font-size: px2rem(16);
    color: $blue;
  }
}
.city {
  position: absolute;
  overflow: hidden;
  z-index: 1000;
  top: px2rem(73);
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  &__item {
    line-height: px2rem(50);
    padding-left: px2rem(15);
    background: #fff;
    color: #666;
    &__list {
      font-size: px2rem(14);
      color: #3B3B3B;
    }
  }
  &__none {
    text-align: center;
    img {
      width: px2rem(170);
      margin-top: px2rem(60);
    }
    &__content {
      display: block;
      font-size: px2rem(14);
      font-weight: bold;
      color: #6B6B6B;
    }
  }
}
</style>
