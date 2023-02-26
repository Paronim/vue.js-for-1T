<template>
    <div class="v-main-wrapper">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  props: true,
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
