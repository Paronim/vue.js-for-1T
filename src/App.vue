<template>
<div id="app">
  <vMainWrapperVue/>
</div>
</template>

<script>
import vMainWrapperVue from './components/v-main-wrapper.vue'

export default {
  name: 'app',
  props: {},
  components: {
    vMainWrapperVue

  }
}
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
