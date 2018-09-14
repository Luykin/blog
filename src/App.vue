<template>
  <div id="app" ref='app'>
    <i-header></i-header>
    <keep-alive>
      <router-view ref='body'></router-view>
    </keep-alive>
    <i-background></i-background>
    <i-capsule></i-capsule>
  </div>
</template>
<script>
  import iHeader from 'components/header/header'
  import iBackground from 'base/ibackground/ibackground'
  import iCapsule from 'components/capsule/capsule'
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
      iHeader,
      iBackground,
      iCapsule
    },
    watch: {
    }
  }

</script>
<style>
@import url(common/css/reset.css);

</style>
