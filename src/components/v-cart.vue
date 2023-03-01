<template>
  <h1>Cart</h1>
  <div class="v-cart">
<div class="v-cart-wrap">
  <div class="v-cart-link-to-catalog">
           <router-link class="router-link" :to="{name: 'catalog'}">
      <button class="btn"><i class="medium material-icons">arrow_back</i> Back to Catalog</button>
      </router-link>
          </div>
<div class="icon-for-exit-from-cart">
  <i class="medium material-icons ">local_grocery_store</i> {{ CART.length }}
</div>

<p v-if="CART.length===0">You haven't got any products...</p>
</div>

<div class="v-cart-wrap-items">
    <vCartItem
     v-for="(item, index) in CART"
     :key="item.article"
     :cart_item_data="item"
     @deleteFromCart="deleteFromCart(index)"/>
  </div>
</div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-cart',
  props: {
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
  },
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

<style lang="scss" scoped>
 .v-cart-wrap-items{
        display: flex;
        margin: 0 auto;
        flex-wrap: wrap;
        max-width: 1500px;
    }
    .v-cart-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }
    .btn {
      display: flex;
      align-items: center;
    }
    .router-link {
      position: absolute;
      top: 50px;
      left: 50px;
    }
    .icon-for-exit-from-cart{
      position: absolute;
      top: 50px;
      right: 50px;
    }
</style>
