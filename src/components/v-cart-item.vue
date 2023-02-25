<template>
    <div class="v-cart-item">
      <img class="v-catalog-item_image" :src="require('../assets/' + cart_item_data.image)" alt="pic">
      <div>
        <p>{{ cart_item_data.name }}</p>
        <p>{{ cart_item_data.price }}</p>
        <p>{{ cart_item_data.article }}</p>
        <p>{{ cart_item_data.about }}</p>

        <div class="v-cart-item_quantity">
        <p>Quantity</p>
        <span>
          {{ cart_item_data.quantity }}
        </span>

      </div>
      <button class="v-cart-item_btn" @click="deleteFromCart()">Delete</button>
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
        height: 400px;
        margin: 0 auto;
        box-shadow: 0 0 8px grey;
        margin-top: 40px;
    }
    .v-cart-item_btn{
        width: 200px;
        height: 50px;
        border-radius: 25px;
        margin-top: 20px;
        background: rgba(84, 84, 122, 0.733);
        border: none;
        color: white;
        box-shadow: 0 0 4px grey;
        cursor: pointer;
    }
    .v-catalog-item_btn:hover{
        background: rgba(60, 60, 87, 0.733);
    }
  </style>
