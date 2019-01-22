<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar @select-city="selectCity" @checked-category="checkedCategory" />
      <div class="content col att-content" v-cloak>
        <BusinessCard v-for="item in filteredList(data)"
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
  computed: {
  },
  methods: {
    checkedFilter (val) {
      var tmpval = this.checkCat
      var tmpArr = []
      if (tmpval.length > 0) {
        tmpval.map(function (i) {
          val.find(response => {
            if (response.category === i) {
              tmpArr.push(response)
            }
          })
        })
        this.selectCheck = tmpArr
        return this.selectCheck
      } else {
        return val
      }
    },
    checkedCategory (e) {
      this.checkCat = e
    },
    selectCity (e) {
      this.select = e
    },
    filteredList (val) {
      if (this.checkedCategory) {
        return this.checkedFilter(val)
      }
      if (this.selectCity) {
        console.log(this.select)
        var tmpval = this.select
        return val.filter(response => response.city === tmpval)
      }
      // if (this.select > 0) {
      //   val = this.select
      //   return this.data.filter(response => response.city === val)
      // } else if (this.checkedCategory) {
      //   this.select = 0
      //   val = this.checkCat
      //   var data = this.$store.state.defaultData.data
      //   var tmpArr = []
      //   if (val.length > 0) {
      //     val.map(function (i) {
      //       data.find(response => {
      //         if (response.category === i) {
      //           tmpArr.push(response)
      //         }
      //       })
      //     })
      //     this.selectCheck = tmpArr
      //     return this.selectCheck
      //   } else {
      //     return this.data
      //   }
      // } else {
      //   return this.data
      // }
    }
  },
  watch: {
    select: function () {
      this.filteredList(this.data)
    },
    checkCat: function () {
      this.filteredList(this.data)
    }
  }
}
</script>

<style lang="scss">
  .att-content {
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 960px) {
      padding: 0 !important;
    }
    @media (max-width: 768px) {
      padding: 0 15px !important;
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (orientation: landscape) {
    .att-content {
      position: relative;
      width: calc(100% - 300px) !important;
      margin-left: 300px;
    }
  }
</style>
