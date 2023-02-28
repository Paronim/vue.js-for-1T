<template>
    <div class="v-main-wrapper">
        <router-view></router-view>
    </div>
  </template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
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
