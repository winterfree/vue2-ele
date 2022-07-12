export default {
  longitude: '121.472644', // 经度
  latitude: '31.231706', // 纬度
  cartList: {}, // 加入购物车的商品列表
  shopDetail: null, // 商家详情信息
  userInfo: null, // 用户信息
  shopid: null, // 商铺id
  remarkText: null, // 可选备注内容
  inputText: '', // 输入备注内容
  invoice: false, // 开发票
  newAddress: [], // 确认订单页新的地址
  searchAddress: null, // 搜索并选择的地址
  geohash: '121.472644,31.231706',
  choosedAddress: null, // 选择地址
  addressIndex: null, // 选择地址的索引值
  needValidation: null, // 确认订单时是否需要验证
  cartId: null, // 购物车id
  sig: null, // 购物车sig
  orderParam: null, // 订单的参数
  orderMessage: null, // 订单返回的信息
  orderDetail: null, // 订单详情
  login: true, // 是否登录
  imgPath: null, // 头像地址
  removeAddress: [], // 移除地址
  addAddress: '', // 新增地址
  question: null, // 问题详情
  cartPrice: null, // 会员卡价格

  location: {}, // 地图API定位数据集
  address: '请选择地址...', // 地址信息
  swiperList: [], // MSite页轮播图
  iconList: [], // MSite食品分类数组
  activity_types: [], // 筛选类型 tag:delete_after
  time_types: [], // 时间筛选类型 tag:delete_after
  distance_types: [] // 距离筛选类型 tag:delete_after
}
