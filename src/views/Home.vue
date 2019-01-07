<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar @select-city="selectCity" @checked-category="checkedCategory" />
      <div class="content col-12 col-sm-9 col-md-9" v-cloak>
        <BusinessCard v-for="item in filteredList(select)"
                      :key="item.id"
                      :item="item" />
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
      selectCheck: [],
      checkCat: [],
      select: 0,
      data: this.$store.state.defaultData.data
    }
  },
  methods: {
    checkedCategory (e) {
      this.checkCat = e
    },
    selectCity (e) {
      this.select = e
    },
    filteredList (val) {
      if (this.select > 0) {
        val = this.select
        return this.data.filter(response => response.city === val)
      } else if (this.checkedCategory) {
        this.select = 0
        val = this.checkCat
        var data = this.$store.state.defaultData.data
        var tmpArr = []
        if (val.length > 0) {
          val.map(function (i) {
            data.find(response => {
              if (response.category === i) {
                tmpArr.push(response)
              }
            })
          })
          this.selectCheck = tmpArr
          return this.selectCheck
        } else {
          return this.data
        }
      } else {
        return this.data
      }
    }
  },
  watch: {
    select: function (val) {
      this.filteredList(val)
    },
    checkCat: function (val) {
      this.filteredList(val)
    }
  }
}
</script>

<style lang="scss">
  .content {
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
  }
</style>
