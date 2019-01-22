<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    width: 1170px;
    margin: 20px auto;
  }

  @media (max-width: 1200px) {
    #app {
      width: 960px;
    }
  }

  @media (max-width: 960px) {
    #app {
      width: 100%;
    }
  }
</style>
