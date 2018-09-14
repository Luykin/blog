<template>
  <div class="lyk-background" ref='lykBg'></div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {

    }
  },
  created() {
    this.$root.eventHub.$on('lyksetBackground', (data) => {
      if (data) {
        console.log(data.background)
        this.$refs.lykBg.setAttribute('style', 'position: fixed;top: 0;bottom: 0;left: 0;right: 0;z-index: -1;background-image:' + data.background)
      }
    })
  },
  methods: {}
}

</script>
<style scoped>
.lyk-background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
}

</style>
