<template>
    <h1>Catalog</h1>
    <div class="v-catalog">
      <router-link :to="{name: 'cart', params:{cart_data: CART}}">
        <div class="v-catalog-link-to-cart">
          <i class="medium material-icons">local_grocery_store</i> {{ CART.length }}
      </div>
      </router-link>

        <vCatalogItem v-for="product in PRODUCTS" :key="product.article" :product_data="product" @addToCart="addToCart"/>
    </div>
  </template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-catalog',
  props: {},
  components: {
    vCatalogItem
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),

    addToCart (data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log('Данные пришли')
      }
    })
  }
}
</script>

  <style lang="scss">
    .v-catalog{
        display: flex;
        margin: 0 auto;
        flex-wrap: wrap;
        max-width: 1500px;
    }
    .v-catalog-link-to-cart{
      position: absolute;
      top: 10px;
      right: 15px;
      padding: 20px;
    }
  </style>
