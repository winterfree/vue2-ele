import requests from './requests'

const BASE_URL2 = 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/'
const IMG_URL = '/static/mock/data.json' // tag:delete_after
const FILTER_URL = '/static/mock/batch_filter.json' // tag:delete_after

export const reqMSiteSwiperList = () => requests(IMG_URL) // tag:delete_after
export const reqMSiteIconList = () => requests(IMG_URL) // tag:delete_after
export const reqActivityTypes = () => requests(FILTER_URL) // tag:delete_after
export const reqTimeTypes = () => requests(FILTER_URL) // tag:delete_after
export const reqDistanceTypes = () => requests(FILTER_URL) // tag:delete_after

// 今日菜单的所有菜单分类
export const getTodayMenuCategoryList = () => requests(BASE_URL2 + 'recipe/allScene')
// 菜品菜单
export const getTodayMenuDetail = (params) => requests(BASE_URL2 + 'recipe/menulist' + params)
