<template>
  <div class="col att-sidebar-wrapper">
    <div class="att-filter-block mb-5">
      <p class="att-filter-title">City</p>
      <div class="input-group">
        <select class="custom-select att-select" v-model="selectedCity" @change="selectCity(selectedCity)">
          <option selected value="0">Select all</option>
          <option v-for="city in citys"
                  :key="city.id"
                  :value="city.id">
            {{city.name}}
          </option>
        </select>
      </div>
    </div>
    <div class="att-filter-block mb-5">
      <p class="att-filter-title">Category</p>
      <div class="input-group">
        <ul class="att-list-of-category list-unstyled">
          <li class="att-category-item" v-for="option in category" :key="option.id">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" :id="'category'+option.id" :value="option.id" v-model="checkedItem">
              <label class="custom-control-label att-category-title" :for="'category'+option.id">{{option.name}} <span class="att-category-count">({{countCategory(option.id)}})</span></label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      checkCheck: false,
      selCheck: false,
      checkedItem: [],
      selectedCity: '',
      category: this.$store.state.defaultData.category,
      citys: this.$store.state.defaultData.city
    }
  },
  methods: {
    selectCity (item) {
      this.selCheck = true
      this.$emit('select-city', item)
    },
    countCategory (value) {
      let count = 0
      for (const item of this.$store.state.defaultData.data) {
        if (item.category === value) {
          count++
        }
      }
      return count
    }
  },
  watch: {
    checkCheck: function () {
      this.selectedCity = ''
    },
    selCheck: function () {
      this.checkedItem = []
    },
    checkedItem: function (val) {
      this.checkCheck = true
      this.$emit('checked-category', val)
    }
  }
}
</script>

<style lang="scss">
  .att-sidebar-wrapper {
    padding-left: 100px !important;
    min-width: 200px;
    max-width: 350px !important;
  }
  .att-select {
    background: url("../assets/img/icn_arrow_down.png") no-repeat calc(100% - 10px) center !important;
    border-radius: 0 !important;
  }
  .att-filter-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
  }
  .att-list-of-category {
    .att-category-item {
      margin-bottom: 7px;
    }
    .att-category-count {
      color: #a6a9af;
      font-family: 'Open Sans', sans-serif;
      font-size: 15px;
      margin-left: 5px;
    }
    .att-category-title {
      font-family: 'Raleway', sans-serif;
      font-size: 15px;
      &:before,
      &:after {
        top: .16rem !important;
        border: none !important;
        width: 18px !important;
        height: 18px !important;
        border-radius: 0 !important;
      }
      &:before {
        background: url("../assets/img/checkbox_base.png") !important;
      }
    }
    .custom-checkbox .custom-control-input:checked~.att-category-title:after {
      background: url("../assets/img/checkbox_checked.png") !important;
    }
  }
</style>
