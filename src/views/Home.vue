<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar @select-city="selectCity" @checked-category="checkedCategory" @sidebarfilter="chengefilter"/>
      <div class="content col att-content" v-cloak>
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
      select: '',
      data: this.$store.state.defaultData.data
    }
  },
  computed: {
  },
  methods: {
    checkedCategory (e) {
      this.checkCat = e
    },
    selectCity (e) {
      this.select = e
    },
    chengefilter (e) {
      if (typeof e === 'object') {
        e.map(resp => {
          this.selectCheck.push(resp)
          console.log(this.selectCheck)
        })
      } else if (typeof e === 'number') {
        console.log('number')
      } else {
        return false
      }
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
