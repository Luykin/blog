<template>
  <div>
    <video src="../../assets/bg.mp4" autoplay loop muted="true" class="index-bg"></video>
    <div v-if="indexData" class="card flex" @mousemove="_mousemove($event)" @mouseleave="_mouseleave($event)" ref="card">
      <div>{{indexData.realName}}</div>
    </div>
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
    computed: {
    },
    mounted() {
    },
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
          this.$refs.card.style = `transition: none; transform: perspective(700px) rotateX(${(event.offsetY - (this.$refs.card.offsetWidth / 2))/60}deg) rotateY(${(event.offsetX - (this.$refs.card.offsetHeight / 2))/100}deg) scale3d(1, 1, 1);`
        })
      },
      _mouseleave(event) {
        window.requestAnimationFrame(() => {
          this.$refs.card.style = `transition: 300ms cubic-bezier(0.03, 0.98, 0.52, 0.99); transform: perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);`
        })
      }
    },
    components: {}
  }

</script>
<style type="text/css" scoped>
.index-bg{
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -1;
}
.card{
  position: fixed;
  top: 30%;
  left: 30%;
  width: 90%;
  max-width: 750px;
  min-width: 300px;
  /*  background: rgba(0,0,0,.4);*/
  /*  transform: translate(-50%, -50%);*/
  background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536479453031&di=fa64e0e765769fcbe8ee41a4cadf35be&imgtype=0&src=http%3A%2F%2Fimg6.cache.hxsd.com%2Fhxsdmy%2Fgallery%2F2012%2F01%2F83%2F89%2F35%2F11%2F12%2F134024706%2FAkali_Splash_5.jpg') no-repeat;
  background-size: cover;
  border-radius: 15px;
  opacity: .9;
  overflow: hidden;
}
.card:after{
  display: block;
  content: '';
  margin-top: 40%;
}
</style>
