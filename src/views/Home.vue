<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar />
      <div class="content col-12 col-sm-9 col-md-9">
        <BusinessCard v-for="item in data" :key="item.id" :cityTitle="item.city" :cityPrice="item.price" :cityCategory="item.category" :cityName="item.name"/>
      </div>
    </div>
  </div>
</template>

<script>
import BusinessCard from '@/components/BusinessCard'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'home',
  components: {
    Sidebar,
    BusinessCard
  },
  data () {
    return {
      data: this.$store.state.defaultData.data
    }
  }
}
</script>

<style lang="scss">
  .content {
    /*justify-content: space-around;*/
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
  }
</style>
