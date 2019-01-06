<template>
  <div class="col sidebar-wrapper">
    <div class="filter-block">
      <p class="filter-title">City</p>
      <div class="input-group mb-3">
        <select class="custom-select">
          <option selected>Choose...</option>
          <option v-for="city in citys" :key="city.id" :value="city.id">{{city.name}}</option>
        </select>
      </div>
    </div>
    <div class="filter-block">
      <p class="filter-title">City</p>
      <div class="input-group mb-3">
        <ul class="list-group list-unstyled">
          <li class="" v-for="option in category" :key="option.id">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" :id="'category'+option.id" :value="option.id">
              <label class="custom-control-label" :for="'category'+option.id">{{option.name}} <span class="category-count">({{countCategory(option.id)}})</span></label>
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
      category: this.$store.state.defaultData.category,
      citys: this.$store.state.defaultData.city,
      data: this.$store.state.defaultData.data
    }
  },
  methods: {
    countCategory (value) {
      let count = 0
      for (const item of this.data) {
        if (item.category === value) {
          count++
        }
      }
      return count
    }
  }
}
</script>

<style lang="scss">
  .sidebar-wrapper {
    padding-left: 100px !important;
    min-width: 200px;
    max-width: 350px !important;
  }
  .custom-select {
    background: url("../assets/img/icn_arrow_down.png") no-repeat calc(100% - 10px) center !important;
    border-radius: 0 !important;
  }
  .category-count {
    color: #a6a9af;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    margin-left: 5px;
  }
</style>
