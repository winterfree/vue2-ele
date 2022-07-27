<template>
  <div class="list" ref="wrapper">
    <div>
      <Location :address="guessCity" />
      <div class="hotcity clearfix">
        <div class="title">热门城市</div>
        <ul class="city-list">
          <router-link
            tag="li"
            v-for="item in hotcity"
            :to="'/city/' + item.id"
            :key="item.id"
          >
            {{item.name}}
          </router-link>
        </ul>
      </div>
      <div
        v-for="(value, key) in sortgroupcity"
        :key="key"
        :ref="key"
        class="area city-sort"
      >
        <div class="title title-sort">{{key}}</div>
        <div class="item-list">
          <div
            class="item"
            :class="index == 0 ? 'border-topbottom' : 'border-bottom'"
            v-for="(item, index) in value"
            :key="item.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import Location from '@/components/common/Location'
export default {
  components: {
    Location
  },
  props: {
    guessCity: String,
    hotcity: Array,
    groupcity: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      observeDOM: true,
      probeType: 3,
      click: true,
      bounce: true
    })
  },
  computed: {
    // 将获取的数据按照A-Z字母开头排序
    sortgroupcity () {
      const sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/mixin';
  .list {
    overflow: hidden;
    position: absolute;
    top: px2rem(80);
    left: 0;
    right: 0;
    bottom: 0;
  }
  .hotcity {
    ul {
      padding: 0 px2rem(25);
      li {
        float: left;
        margin: px2rem(4);
        width: px2rem(100);
        height: px2rem(35);
        line-height: px2rem(35);
        background-color: #F8F8F8;
        font-size: px2rem(13);
        border-radius: px2rem(3);
        text-align: center;
      }
    }
  }
  .area {
    margin-top: px2rem(21);
    .title-sort {
      margin-top: px2rem(25);
    }
    .item-list {
      padding: 0 px2rem(25);
      .item {
        font-size: px2rem(13);
        color: #151515;
        line-height: px2rem(48);
      }
    }
  }
  .border-topbottom {
    z-index: -10;
  }
  .border-bottom {
    z-index: -10;
    &:before {
      border-color: #DEDEDE;
    }
  }
  .title {
    margin: px2rem(10);
    font-size: px2rem(12);
    color: #989898;
  }

</style>
