module.exports = {
  filenameHashing: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/style/default.scss";
        `
      }
    }
  },
  baseUrl: ''
}
