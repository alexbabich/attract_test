<template>
  <div class="about">
    <div><h5>Name: <b>{{this.cityInfo.name}}</b></h5></div>
    <div><h5>City: <b>{{getCity(this.cityInfo.city)}}</b></h5></div>
    <div><h5>Category: <b>{{getCategory(this.cityInfo.category)}}</b></h5></div>
    <div><h5>Price: <b>${{this.cityInfo.price}}</b></h5></div>
  </div>
</template>

<script>
export default {
  name: 'SinglePage',
  data () {
    return {
      cityInfo: []
    }
  },
  created () {
    let data = this.$store.state.defaultData.data
    data.map(response => {
      if (response.id === Number(this.$route.params.id)) {
        this.cityInfo = response
      }
    })
  },
  methods: {
    getCity (value) {
      let data = this.$store.state.defaultData.city
      let cityName = data.find(response => response.id === value)
      return cityName.name
    },
    getCategory (value) {
      let data = this.$store.state.defaultData.category
      let cityName = data.find(response => response.id === value)
      return cityName.name
    }
  }
}
</script>
