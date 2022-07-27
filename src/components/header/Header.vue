<template>
  <div class="container">
    <div class="position">
      <div
        class="position__address"
        @click="$router.push({name: 'selectaddress', params: {cityid: guessCityid}})"
      >
        <i class="iconfont position__address__icon">&#xe66f;</i>
        <span class="position__address__text">{{address}}</span>
      </div>
      <div class="position__other">
        <span class="iconfont position__other__scan">&#xe65a;</span>
        <span class="iconfont position__other__notice">&#xe60a;</span>
      </div>
    </div>
    <div class="search">
      <div class="search__wrapper">
        <form class="search__wrapper__form">
          <i class="iconfont search__wrapper__form__icon">&#xe729;</i>
          <input
            type="search"
            placeholder="请输入商家或美食名称"
            class="search__wrapper__form__input"
          >
          <input
            type="submit"
            class="search__wrapper__form__button"
            value="搜索"
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { reqAddress, cityGuess } from '@/api'
export default {
  name: 'Header',
  data () {
    return {
      geohash: '',
      address: ''
    }
  },
  async beforeMount () {
    if (!this.$route.query.geohash) {
      const address = await cityGuess()
      console.log(address)
      this.geohash = address.latitude + ',' + address.longitude
    } else {
      this.geohash = this.$route.query.geohash
    }
    // 将获取的定位存储入vuex中
    this.SAVE_GEOHASH(this.geohash)
    // 获取位置信息
    const res = await reqAddress(this.geohash)
    this.address = res.name
    // 记录当前经度纬度
    this.RECORD_ADDRESS(res)
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
.container {
  background: $bright;
  .position {
    position: relative;
    margin: 0 px2rem(15);
    padding: px2rem(14) 0;
    font-size: 0;
    &__address {
      display: inline-block;
      width: px2rem(190);
      color: #fff;
      @include ellipse();
      &__icon {
        font-size: px2rem(19);
      }
      &__text {
        margin-left: px2rem(5);
        font-size: px2rem(19);
        font-weight: bold;
        color: #fff;
      }
    }
    &__other {
      position: absolute;
      right: 0;
      color: #fff;
      display: inline-block;
      &__scan {
        margin-right: px2rem(25);
        font-size: px2rem(21);
      }
      &__notice {
        font-size: px2rem(21);
      }
    }
  }
  .search {
    &__wrapper {
      width: 100%;
      height: px2rem(58);
      padding: px2rem(8) 0 px2rem(8);
      background: #fff;
      border-radius: px2rem(20) px2rem(20) 0 0;
      box-sizing: border-box;
      z-index: 10;
      font-size: 0;
      &__form {
        position: relative;
        width: px2rem(350);
        height: px2rem(35);
        line-height: px2rem(35);
        margin: 0 auto;
        border: 0;
        border-radius: px2rem(40);
        background: #F0F1F3;
        color: #B4B5B7;
        font-size: px2rem(14);
        padding: px2rem(3) 0;
        @include ellipse();
        &__icon {
          margin-left: px2rem(17);
        }
        &__input {
          margin-left: px2rem(6);
          font-size: px2rem(14);
        }
        &__button {
          position: absolute;
          line-height: px2rem(20);
          color: #FCF7F3;
          background: $bright;
          padding: px2rem(8) px2rem(17);
          border: none;
          border-radius: px2rem(20);
          right: px2rem(4);
        }
      }
    }
  }
}
</style>
