<template>
  <h1>Cart</h1>
  <div class="v-cart">
    <vCartItem
     v-for="(item, index) in cart_data"
     :key="item.article"
     :cart_item_data="item"
     @deleteFromCart="deleteFromCart(index)"/>
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions } from 'vuex'

export default {
  name: 'v-cart',
  props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    vCartItem
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),

    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss" scoped>
 .v-cart{
        display: flex;
        margin: 0 auto;
        flex-wrap: wrap;
        max-width: 1500px;
    }
</style>
