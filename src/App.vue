<template>
  <div id="app" ref='app'>
    <keep-alive>
      <router-view ref='body'></router-view>
    </keep-alive>
  </div>
</template>
<script>
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
  },
  watch: {
  }
}

</script>
<style>
@import url(common/css/reset.css);

</style>
