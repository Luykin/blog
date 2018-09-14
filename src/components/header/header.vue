<template>
  <div v-if="indexData" class="card flex" :class="{'deformation': !status, 'restore': restore, 'opacity': opacity}" @mousemove="_mousemove($event)" @mouseleave="_mouseleave($event)" ref="card">
    <div class="card-nei flex" :style="'background:url('+indexData.userBackground+') no-repeat; background-size: cover;'">
      <!-- :style="'background:url('+indexData.userBackground+') no-repeat; background-size: cover;'" -->
      <div class="card-top flex" :class="{'card-top-none': !status, 'card-top-restore': restore}">
        {{indexData.realName}}的个人网站
      </div>
      <div class="card-middle flex" :class="{'card-middle-none': !status, 'card-middle-restore': restore}">
        <div :style="'background:url(' + indexData.userIcon +') no-repeat; background-size: 100% auto;'" class="header-img" :class="{'header-img-none': !status, 'header-img-restore': restore}"></div>
        <div class="card-btn-list flex">
          <div class="deformation-btn flex cursor" @click="_deformation" v-show="status">进入主页</div>
          <div class="deformation-btn flex cursor" v-show="status">关于我</div>
          <div class="deformation-btn flex cursor" @click="_restore" v-show="!status">导航页</div>
        </div>
      </div>
      <div class="card-bottom flex" :class="{'card-middle-none': !status, 'card-middle-restore': restore}">
        <div class="card-bottom-item flex" v-show="status">QQ:{{indexData.userTencent}}</div>
        <div class="card-bottom-item flex" v-show="status">wx:{{indexData.userWeChat}}</div>
        <div class="card-bottom-item flex cursor">github:{{indexData.userGihub}}</div>
      </div>
      <!-- <div class="car-item flex">{{indexData.realName}}</div> -->
    </div>
  </div>
</template>
<script type="text/javascript">
import { index } from 'api/index'
export default {
  data() {
    return {
      indexData: null,
      status: true,
      restore: null,
      opacity: null
    }
  },
  created() {
    this._setStatus()
    this._index()
  },
  computed: {},
  mounted() {},
  methods: {
    _setStatus() {
      if (window.location.hash == '#/index' || window.location.hash == '#/') {
        this.status = true
      } else {
        this.status = false
        this.opacity = true
        let time = setTimeout(() => {
          this.opacity = null
          clearTimeout(time)
        }, 600)
      }
    },
    _index() {
      index().then((res) => {
        if (res.status === 200) {
          this.indexData = res.data
        }
      })
    },
    _mousemove(event) {
      window.requestAnimationFrame(() => {
        if (this.status) {
          this.$refs.card.style = `transition: none; transform: perspective(900px) rotateX(${(event.pageY - this.$refs.card.offsetTop)/30}deg) rotateY(${(event.pageX - this.$refs.card.offsetLeft)/60}deg) scale3d(1, 1, 1) translate(-50%, -50%);`
        }
      })
    },
    _mouseleave(event) {
      window.requestAnimationFrame(() => {
        if (this.status) {
          this.$refs.card.style = `transition: 800ms cubic-bezier(0.03, 0.98, 0.52, 0.99); transform: perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translate(-50%, -50%);`
        }
      })
    },
    _deformation() {
      if (this.status) {
        this._mouseleave()
        this.status = false
        this.restore = null
        this.$router.push({
          path: '/home'
        })
      }
    },
    _restore() {
      if (!this.status) {
        this.status = true
        this.restore = true
        this.$router.push({
          path: '/index'
        })
        this.$root.eventHub.$emit('video')
        let time = setTimeout(() => {
          this.restore = false
          // this.$root.eventHub.$emit('video')
          clearTimeout(time)
        }, 600)
      }
    }
  },
  components: {}
}

</script>
<style scoped>
.card {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  width: 90%;
  max-width: 750px;
  min-width: 300px;
  transform: translate(-50%, -50%);
  transform-origin: 0% 0%;
  background: rgba(255, 255, 255, .3);
  background-size: cover;
  border-radius: 15px;
  opacity: .8;
  box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  overflow: hidden;
}

.card-nei {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  flex-wrap: wrap;
}

.card:after {
  display: block;
  content: '';
  margin-top: 46%;
}

.user-icon {
  width: 120px;
  height: 120px;
  border-radius: 1000px;
  margin: 0 auto;
  background-size: cover;
}

.car-item {
  /*  width: 100%;*/
  height: 20%;
  color: #fff;
}

.deformation {
  animation: deformation .4s linear 1 forwards;
}

.restore {
  animation: restore .4s linear 1 forwards;
}

.restore:after {
  display: block;
  content: '';
  animation: restoreAfter .4s linear 1 forwards;
}

.deformation:after {
  display: block;
  content: '';
  animation: deformationAfter .4s linear 1 forwards;
}

@keyframes deformationAfter {
  0% {
    margin-top: 46%;
  }
  100% {
    margin-top: 45px;
  }
}

@keyframes restoreAfter {
  0% {
    margin-top: 45px;
  }
  100% {
    margin-top: 46%;
  }
}

@keyframes deformation {
  0% {
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 750px;
    transition: none;
    border-radius: 15px;
    transform: translate3d(-50%, -50%, 0);
  }
  15% {
    max-width: 1000px;
  }
  30% {
    max-width: 1250px;
  }
  35% {
    top: 20%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  45% {
    max-width: 1600px;
  }
  65% {
    left: 50%;
    width: 90%;
    max-width: 1750px;
    transform: translate3d(-50%, 0, 0);
  }
  80% {
    max-width: 1900px;
  }
  81% {
    max-width: none;
  }
  100% {
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    max-width: none;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes restore {
  0% {
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    max-width: none;
    transform: translate3d(0, 0, 0);
  }
  10% {
    top: 0;
    left: 50%;
    max-width: 1500px;
    width: 90%;
    transform: translate3d(-50%, -50%, 0);
  }
  35% {
    top: 10%;
    max-width: 1200px;
  }
  50% {
    top: 20%;
    max-width: 1000px;
  }
  70% {
    max-width: 750px;
  }
  100% {
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 750px;
    border-radius: 15px;
    transform: translate3d(-50%, -50%, 0);
  }
}

.deformation-btn {
  color: #fff;
  font-size: 20px;
  width: 0;
  flex-grow: 1;
}

.header-img {
  width: 90px;
  height: 90px;
  border-radius: 120px;
  margin: 0 10%;
  overflow: hidden;
}

.card-top {
  width: 100%;
  height: 20%;
  color: #fff;
  font-size: 24px;
  overflow: hidden;
}

.card-middle {
  width: 100%;
  height: 68%;
  justify-content: flex-start;
  flex-grow: 1;
  overflow: hidden;
}

.card-bottom {
  width: 100%;
  height: 12%;
  font-size: 15px;
  color: #fff;
  flex-grow: 1;
  overflow: hidden;
}

.card-bottom-item {
  width: 0;
  flex-grow: 1;
}

.card-btn-list {
  width: 0;
  flex-grow: 1;
  margin-right: 10%;
}

.card-top-none {
  animation: cardtopnone .2s linear 1 forwards;
}

.card-top-restore {
  animation: cardtoprestore .4s linear 1 forwards;
}

.header-img-none {
  animation: headerimgnone .4s linear 1 forwards;
}

.header-img-restore {
  animation: headerimgrestore .4s linear 1 forwards;
}

.card .card-middle-none {
  animation: middlenone .4s linear 1 forwards;
}

.card .card-middle-restore {
  animation: middlerestore .4s linear 1 forwards;
}

@keyframes middlenone {
  0% {
    width: 100%;
  }
  100% {
    width: 50%;
  }
}

@keyframes middlerestore {
  0% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}







/*@keyframes middlenone{
  
}
@keyframes middlenone{
  
}
@keyframes middlenone{
  
  }*/

@keyframes headerimgnone {
  0% {
    transform: scale(1, 1);
    opacity: 1;
  }
  100% {
    transform: scale(0, 0);
    opacity: 0;
  }
}

@keyframes headerimgrestore {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}

@keyframes cardtoprestore {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 20%;
    opacity: 1;
  }
}

@keyframes cardtopnone {
  0% {
    height: 20%;
    opacity: 1;
  }
  100% {
    height: 0;
    opacity: 0;
  }
}

.card-middle-none .card-bottom-item {
  font-size: 12px;
}

.card-middle-none .deformation-btn {
  font-size: 14px;
}

.deformation .card-bottom {
  height: 100%;
}

.deformation .card-middle {
  height: 100%;
}

.deformation .card-nei {
  flex-direction: row-reverse;
}

.opacity {
  opacity: 0 !important;
}

</style>
