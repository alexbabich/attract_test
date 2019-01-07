<template>
  <div class="card att-card" @click="goTodetail(item.id)">
      <div class="card-img att-card-img">
          <img class="card-img-top att-card-img-top" :src="require(`@/assets/img/photo-${item.id}.jpeg`)" alt="card image" />
          <div class="att-img-text">
              <p>{{getCity(item.city)}}</p>
          </div>
      </div>
      <div class="card-body att-card-body">
          <h5 class="att-card-title">{{item.name}}</h5>
          <div class="att-more-info">
              <p class="att-card-category pull-left">{{getCategory(item.category)}}</p>
              <p class="att-card-price pull-right">${{item.price}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessItem',
  props: ['item'],
  methods: {
    goTodetail (value) {
      this.$router.push({ path: `/single/${value}` })
    },
    getCity (value) {
      let data = this.$store.state.defaultData.city
      let cityName = data.find(response => response.id === value)
      return cityName.name
    },
    getCategory (value) {
      let data = this.$store.state.defaultData.category
      let categoryName = data.find(response => response.id === value)
      return categoryName.name
    }
  }
}
</script>

<style lang="scss">
    .att-card {
        width: 270px;
        height: 320px;
        border-radius: 0 !important;
        margin: 0 25px 25px;
        &:hover {
            box-shadow: 0 0 20px 2px #c0c0c0;
            cursor: pointer;
            .att-card-img {
                &:after {
                    content: '';
                    background: rgba(28, 184, 255, 0.5);
                    width: 100%;
                    height: 180px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                &:before {
                    display: none;
                }
            }
        }
        .att-card-img {
            overflow: hidden;
            height: 180px;
            border-radius: 0 !important;
            position: relative;
            &:before {
                content: '';
                box-shadow: inset 0 -55px 70px -10px rgba(66, 64, 64, 0.5);
                height: 100%;
                width: 100%;
                position: absolute;
                bottom: 0;
                z-index: 9;
            }
            .att-card-img-top {
                transform: scale(1.5);
            }
            .att-img-text {
                color: #fff;
                position: relative;
                top: -30px;
                z-index: 99;
                padding: 0 23px;
                font-family: 'Raleway', sans-serif;
                font-size: 13px;
            }
        }
        .att-card-body {
            padding: 17px 20px;
            p {
                margin: 0;
            }
            .att-card-price {
                font-weight: bold;
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
            }
            .att-card-category {
                font-family: 'Raleway', sans-serif;
                font-size: 13px;
                color: #a6a9af;
            }
        }
        .att-card-title {
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            color: $text-color;
        }
        .att-more-info {
            position: absolute;
            bottom: 40px;
            left: 0;
            width: 100%;
            padding: 0 20px;
            height: 0;
        }
    }
</style>
