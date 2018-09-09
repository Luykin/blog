<template>
  <div class="index-content">
    <video src="../../assets/bg.mp4" autoplay loop muted="true" class="index-bg"></video>
  </div>
</template>
<script type="text/javascript">
  import { login, index } from 'api/index'
  export default {
    data() {
      return {
        indexData: null,
      }
    },
    created() {
      this._index()
    },
    computed: {},
    mounted() {},
    methods: {
      _index() {
        index().then((res) => {
          if (res.status === 200) {
            this.indexData = res.data
          }
        })
      },
      _login() {
        login(this.username, this.userpassword).then((res) => {
          console.log(res)
        })
      },
      _mousemove(event) {
        window.requestAnimationFrame(() => {
        this.$refs.card.style = `transition: none; transform: perspective(900px) rotateX(${(event.offsetY - (this.$refs.card.offsetWidth / 2))/90}deg) rotateY(${(event.offsetX - (this.$refs.card.offsetHeight / 2))/90}deg) scale3d(1, 1, 1) translate(-50%, -50%);`
      })
      },
      _mouseleave(event) {
        window.requestAnimationFrame(() => {
          this.$refs.card.style = `transition: 800ms cubic-bezier(0.03, 0.98, 0.52, 0.99); transform: perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translate(-50%, -50%);`
        })
      }
    },
    components: {}
  }

</script>
<style type="text/css" scoped>
.index-content {
  overflow: hidden;
}

.index-bg {
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -1;
}
</style>
