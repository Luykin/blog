<template>
  <div id="app" ref='app'>
    <i-header></i-header>
    <keep-alive>
      <router-view ref='body'></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import iHeader from 'components/header/header'
  export default {
    data() {
      return {
      }
    },
    created() {},
    mounted() {
    },
    updated() {
    },
    methods: {
    },
    components: {
      iHeader
    },
    watch: {
    }
  }

</script>
<style>
@import url(common/css/reset.css);

</style>
