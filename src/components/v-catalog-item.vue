<template>
    <div class="v-catalog-item">
      <p class="v-catalog-item_name">{{ product_data.name }}</p>
      <p class="v-catalog-item_price">{{ product_data.price }}</p>
      <p class="v-catalog-item_about">{{ product_data.about }}</p>
      <img class="v-catalog-item_image" :src="require('../assets/' + product_data.image)" alt="pic">
      <div class="v-catalog-item-wrapper-quantity">
        <button class="btn" @click="() => {if (valueQuantity > 0) {
        valueQuantity--
      }
      return this.valueQuantity}
    "><i class="medium material-icons">arrow_back</i></button>
        <div class="v-catalog-item_quantity">{{ valueQuantity }}</div>
        <button class="btn" @click="valueQuantity++"><i class="medium material-icons">arrow_forward</i></button>
      </div>
      <button class="v-catalog-item_btn btn" @click="addToCart (); ">Add to Cart</button>
    </div>
  </template>

<script>

export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      valueQuantity: 0
    }
  },
  components: {},
  methods: {
    addToCart () {
      this.$emit('addToCart', this.product_data, this.valueQuantity)
    }
  }
}
</script>

  <style lang="scss">
    .v-catalog-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 450px;
        margin: 0 auto;
        box-shadow: 0 0 8px grey;
        margin-top: 40px;
    }
    .v-catalog-item_quantity{
      height:36px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;

    }
    .v-catalog-item-wrapper-quantity{
      display: flex;
      justify-content: center;
      margin: 20px;
    }
  </style>
