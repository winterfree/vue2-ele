import {
  RECORD_ADDRESS,
  GET_USERINFO,
  SAVE_ADDRESS,
  RECEIVE_SWIPERLIST,
  RECEIVE_ICONLIST,
  SET_LOCATION,
  RECEIVE_ADDRESS,
  RECEIVE_ACTIVITY_TYPES, // tag:delete_after
  RECEIVE_TIME_TYPES, // tag:delete_after
  RECEIVE_DISTANCE_TYPES // tag:delete_after
} from './mutation-types'
import {
  reqAddress,
  getUser,
  getAddressList
} from '../api'
import {
  reqMSiteSwiperList,
  reqMSiteIconList,
  reqActivityTypes, // tag:delete_after
  reqTimeTypes, // tag:delete_after
  reqDistanceTypes // tag:delete_after
} from '../api/mock'

export default {
  // 地图API定位数据集
  setLocation ({ commit }, location) {
    commit(SET_LOCATION, location)
  },
  setAddress ({ commit }, geohash) {
    const latitude = geohash.split(',')[0]
    const longitude = geohash.split(',')[1]
    commit(RECORD_ADDRESS, { latitude, longitude })
    console.log(1)
  },
  // 根据经纬度获取地址
  async getAddress ({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)

    if (result) {
      const address = result.address
      commit(RECEIVE_ADDRESS, { address })
    }
  },
  // 获取用户信息
  async getUserInfo ({ commit, state }) {
    const res = await getUser()
    commit(GET_USERINFO, res)
  },
  async saveAddress ({ commit, state }) {
    if (state.removeAddress.length > 0) return

    const addres = await getAddressList(state.userInfo.user_id)
    commit(SAVE_ADDRESS, addres)
  },
  // 首页轮播图
  async getMSiteSwiperList ({ commit }) {
    const result = await reqMSiteSwiperList()

    if (result.ret && result.data) {
      const swiperList = result.data.swiperList
      commit(RECEIVE_SWIPERLIST, { swiperList })
    }
  },
  // 分类图标
  async getMSiteIconList ({ commit }) {
    const result = await reqMSiteIconList()

    if (result.ret && result.data) {
      const iconList = result.data.iconList
      commit(RECEIVE_ICONLIST, { iconList })
    }
  },
  // tag:delete_after
  async getActivityTypes ({ commit }) {
    const result = await reqActivityTypes()

    if (result.bar) {
      const activityTypes = result.bar.activity_types
      commit(RECEIVE_ACTIVITY_TYPES, { activityTypes })
    }
  },
  // tag:delete_after
  async getTimeTypes ({ commit }) {
    const result = await reqTimeTypes()

    if (result.speed) {
      const timeTypes = result.speed.time_types
      commit(RECEIVE_TIME_TYPES, { timeTypes })
    }
  },
  // tag:delete_after
  async getDistanceTypes ({ commit }) {
    const result = await reqDistanceTypes()

    if (result.speed) {
      const distanceTypes = result.speed.distance_types
      commit(RECEIVE_DISTANCE_TYPES, { distanceTypes })
    }
  }
}
