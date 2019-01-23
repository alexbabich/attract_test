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
  beforeMount () {
    if (localStorage.getItem('checked')) this.checkCat = JSON.parse(localStorage.getItem('checked'))
    if (localStorage.getItem('selected')) this.select = JSON.parse(localStorage.getItem('selected'))
  },
  methods: {
    selectFilter (val) {
      const tmpArr = []
      if (this.select !== 0) {
        val.map(response => {
          if (response.city === this.select) {
            tmpArr.push(response)
          }
        })
        return tmpArr
      } else {
        return val
      }
    },
    checkedFilter (val) {
      const tmpval = this.checkCat
      const tmpArr = []
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
      let tmpArr = []
      if (this.select !== 0) {
        tmpArr = this.selectFilter(val)
        if (this.checkedCategory) {
          return this.checkedFilter(tmpArr)
        } else {
          return tmpArr
        }
      } else if (this.checkedCategory) {
        return this.checkedFilter(val)
      } else {
        return this.data
      }
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

  .att-message {
      position: relative;
      h3 {
          @include centered (50%, 50%, 0, 0);
          width: 50vw;
          text-align: center;
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
