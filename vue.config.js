module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/style/variable.scss";
        `
      }
    }
  },
  baseUrl: ''
}
