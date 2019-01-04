import Vue from 'vue'
import Vuex from 'vuex'
import city from './assets/data/city'
import category from './assets/data/category'
import data from './assets/data/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultData: {
      city: city,
      category: category,
      data: data
    }
  }
})
