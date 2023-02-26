<template>
    <div class="v-catalog-item">
      <p class="v-catalog-item_name">{{ product_data.name }}</p>
      <p class="v-catalog-item_price">{{ product_data.price }}</p>
      <p class="v-catalog-item_about">{{ product_data.about }}</p>
      <img class="v-catalog-item_image" :src="require('../assets/' + product_data.image)" alt="pic">
      <button class="v-catalog-item_btn btn" @click="addToCart()">Add to Cart</button>
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
  components: {},
  data () {
    return {

    }
  },
  methods: {
    addToCart () {
      this.$emit('addToCart', this.product_data)
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
        height: 400px;
        margin: 0 auto;
        box-shadow: 0 0 8px grey;
        margin-top: 40px;
    }
  </style>
