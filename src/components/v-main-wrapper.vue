<template>
    <div class="v-main-wrapper">
        <vCatalog/>
        <vCart v-if="CART.length" :cart_data="CART"/>
    </div>
  </template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  props: {},
  components: {
    vCatalog,
    vCart
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

  <style lang="scss">

  </style>
