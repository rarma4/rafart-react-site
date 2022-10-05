// const withImages = require('next-images')

// module.exports = withImages({
//   esModule: true,
// })
// // module.exports = {
// //   basePath: '/react',
// // };




const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  images:{
    disableStaticImages: true,
    domains: ['img.youtube.com']
  },
  assets:['./public/fonts']
})
// module.exports = {
//   basePath: '/react',
// };