<template>
  <div class="card">
      <div class="card-img">
          <img class="card-img-top" src="../assets/img/woman-hand-desk-office.jpeg" alt="Card image cap">
          <div class="img-text">
              <p>{{getCity(cityTitle)}}</p>
          </div>
      </div>
      <div class="card-body">
          <h5 class="card-title">{{cityName}}</h5>
          <p class="card-category pull-left">{{getCategory(cityCategory)}}</p>
          <p class="card-price pull-right">${{cityPrice}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessItem',
  props: ['cityTitle', 'cityPrice', 'cityCategory', 'cityName'],
  data () {
    return {
    }
  },
  filters: {
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

<style lang="scss">
    .card {
        width: 270px;
        border-radius: 0 !important;
        margin: 0 25px 25px;
        &:hover {
            box-shadow: 0 0 20px 2px #c0c0c0;
            cursor: pointer;
            .card-img {
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
        .card-img {
            overflow: hidden;
            height: 180px;
            border-radius: 0;
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
            .card-img-top {
                transform: scale(1.5);
            }
            .img-text {
                color: #fff;
                position: relative;
                top: -30px;
                z-index: 99;
                padding: 0 23px;
                font-family: 'Raleway', sans-serif;
                font-size: 13px;
            }
        }
        .card-body {
            padding: 17px 20px;
            p {
                margin: 0;
            }
            .card-price {
                font-weight: bold;
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
            }
            .card-category {
                font-family: 'Raleway', sans-serif;
                font-size: 13px;
                color: #a6a9af;
            }
        }
        .card-title {
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            color: $text-color;
        }
    }

</style>
