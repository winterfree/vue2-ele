<template>
  <div>
    <city-search :groupcity="groupcity"></city-search>
    <city-list
      :guessCity="guessCity"
      :hotcity="hotcity"
      :groupcity="groupcity"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :groupcity="groupcity"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import { cityGuess, groupcity, hotcity } from '@/api'
export default {
  components: {
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      guessCity: '', // 当前城市
      groupcity: {}, // 所有城市列表
      hotcity: [], // 热门城市列表
      letter: ''
    }
  },
  mounted () {
    // 获取当前城市
    cityGuess().then(res => {
      console.log(res)
      this.guessCity = res.name
      this.guessCityid = res.id
    })
    // 获取所有城市
    groupcity().then(res => {
      this.groupcity = res
    })
    // 获取热门城市
    hotcity().then(res => {
      this.hotcity = res
    })
  },
  methods: {
    ...mapActions(['getAddress']),
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  computed: {
    ...mapState(['address'])
  }
}
</script>

<style lang="scss" scoped>
</style>
