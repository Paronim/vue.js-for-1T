<template>
    <div class="v-cart-item">
      <img class="v-catalog-item_image" :src="require('../assets/' + cart_item_data.image)" alt="pic">
      <div>
        <p>{{ cart_item_data.name }}</p>
        <p>{{ cart_item_data.price }}</p>
        <p>{{ cart_item_data.article }}</p>
        <p>{{ cart_item_data.about }}</p>

        <div class="v-cart-item_quantity">
        <p>Quantity: {{ cart_item_data.quantity }}</p>

      </div>
      <button class="btn" @click="deleteFromCart()">Delete</button>
      </div>
    </div>
  </template>

<script>

export default {

  name: 'v-cart-item',
  props: {
    cart_item_data: {
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
    deleteFromCart () {
      this.$emit('deleteFromCart')
    }
  }
}
</script>

  <style lang="scss">
.v-cart-item{
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
  </style>
