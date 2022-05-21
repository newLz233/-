Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: 
    [ 'https://img0.baidu.com/it/u=2172105914,79117551&fm=253&fmt=auto&app=120&f=JPEG?w=888&h=500',
      'https://img2.baidu.com/it/u=3079842986,3430230630&fm=253&fmt=auto&app=138&f=JPEG?w=780&h=423',
      'https://img0.baidu.com/it/u=1795625292,17953737&fm=253&fmt=auto&app=120&f=JPEG?w=759&h=500'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})