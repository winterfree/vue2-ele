<template>
  <div class="location">
    <div class="location__title"></div>
    <div class="location__label" @click="$emit('click')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconlocation"></use>
      </svg>
      <span class="location__label__accept">{{address}}</span>
      <span class="location__label__refresh" @click="reload">重新定位</span>
    </div>
    <div class="location__line" v-show="isLine"></div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  props: {
    address: String
  },
  methods: {
    reload () {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
.location {
  &__title {
    margin: px2rem(10);
    font-size: px2rem(12);
    color: #0e0303;
  }
  &__label {
    font-size: px2rem(15);
    padding: px2rem(10) px2rem(10) px2rem(20) px2rem(10);
    svg {
      display: inline-block;
      font-size: px2rem(15);
      vertical-align: baseline;
    }
    &__accept {
      display: inline-block;
      color: #333;
      font-size: px2rem(19);
      font-weight: bold;
      margin-left: px2rem(5);
      width: 65%;
      @include ellipse();
    }
    &__refresh {
      font-size: px2rem(15);
      float: right;
      color: $blue;
    }
  }
  &__line {
    width: 100%;
    height: px2rem(8);
    background-color: #F9F9F9;
  }
}
</style>
