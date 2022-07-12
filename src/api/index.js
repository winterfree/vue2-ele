
import requests from './requests'
import { getStore } from '@/utils/storageUtils'

const BASE_URL = '/api'

/**
 * 获取首页默认地址
 */

export const cityGuess = () => requests(`${BASE_URL}/v1/cities`, {
  type: 'guess'
})

/**
 * 获取当前所在城市
 */

export const currentcity = number => requests(`${BASE_URL}/v1/cities/${number}`)

/**
 * 获取首页所有城市
 */

export const groupcity = () => requests(`${BASE_URL}/v1/cities`, {
  type: 'group'
})

/**
 * 获取首页热门城市
 */

export const hotcity = () => requests(`${BASE_URL}/v1/cities`, {
  type: 'hot'
})

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => requests(`${BASE_URL}/v1/pois`, {
  type: 'search',
  city_id: cityid,
  keyword: value
})

/**
 * 获取Msite页面地址信息
 */

export const reqAddress = geohash => requests(`${BASE_URL}/v2/pois/${geohash}`)

/**
 * 获取shopList页面的 category 种类列表
 */

export const reqFoodCategory = (latitude, longitude) => requests(`${BASE_URL}/shopping/v2/restaurant/category`, {
  latitude,
  longitude
})

/**
 * 获取shopList页面的配送方式
 */

export const reqFoodDelivery = (latitude, longitude) => requests(`${BASE_URL}/shopping/v1/restaurants/delivery_modes`, {
  latitude,
  longitude,
  kw: ''
})

/**
 * 获取shopList页面的商家属性活动列表
 */

export const reqFoodActivity = (latitude, longitude) => requests(`${BASE_URL}/shopping/v1/restaurants/activity_attributes`, {
  latitude,
  longitude,
  kw: ''
})

/**
 * 获取商铺列表
 */

export const reqShopList = (
  latitude,
  longitude,
  offset,
  restaurant_category_id = '',
  restaurant_category_ids = '',
  order_by = '',
  deliveryMode = '',
  support_ids = []
) => {
  let supportStr = ''
  support_ids.forEach(item => {
    if (item.status) {
      supportStr += '&support_ids[]=' + item.restaurant_category_id
    }
  })
  const data = {
    latitude,
    longitude,
    offset,
    limit: '20',
    'extras[]': 'activities',
    keyword: '',
    restaurant_category_id,
    'restaurant_category_ids[]': restaurant_category_ids,
    order_by,
    'delivery_mode[]': deliveryMode + supportStr
  }
  return requests(`${BASE_URL}/shopping/restaurants`, data)
}

/**
 * 获取用户信息
 */

export const getUser = () => requests(`${BASE_URL}/v1/user`, { user_id: getStore('user_id') })

/**
*个人中心里编辑地址
*/

export const getAddressList = userId => requests(`${BASE_URL}/v1/users/${userId}/addresses`)

/**
 * 获取地址列表
 */

export const getAddress = (id, sig) => requests('/v1/carts/' + id + '/addresses', {
  sig
})
