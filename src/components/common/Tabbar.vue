<template>
  <div class="tabbar">
    <router-link
      class="tabbar__item"
      v-for="(item, index) in data"
      :key="index"
      :to="item.path"
      active-class="tabbar__item--selected"
    >
      <span class="tabbar__item__icon">
        <i class="iconfont" v-html="item.icon"></i>
      </span>
      <span class="tabbar__item__label">{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    data: Array
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
.tabbar {
  @include top-border-1px(rgba(0,0,0,.1));
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  padding: px2rem(7) 0;
  display: flex;
  text-align: center;
  &__item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    font-size: px2rem(10);
    color: #B3C0C8;
    &__icon {
      margin-bottom: px2rem(6);
      .iconfont {
        font-size: px2rem(22);
        text-decoration: none;
      }
    }
    &__label {
      text-decoration: none;
    }
  }
  &__item--selected {
    color: $blue;
  }
}
</style>
