<template>
  <div class="v-cart">
    <vCartItem/>
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'

export default {
  name: 'v-cart',
  props: {},
  components: {
    vCartItem
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
