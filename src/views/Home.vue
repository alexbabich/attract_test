<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar class="col-2"/>
      <div class="content col-10">
        <BusinessCard />
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
      rest: this.$store.state.defaultData.city
    }
  }
}
</script>
