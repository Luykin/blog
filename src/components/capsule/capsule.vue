<template>
  <div>
    <div class="lyk-capsule">
      <div class="lyk-c-content-warp flex">
      	<div class="now-bg-color cursor" :style="'background:' + background.background " @click="$root.eventHub.$emit('lykfsmshow', 'chosebg')"></div>
      </div>
    </div>
    <i-full code="chosebg">
      <div class="lyk-chose-box-skin-color flex">
        <div v-for="(item, index) in skinColor" class="lyk-cbsc-item cursor" :style="'background-image:' + item.background" :class="{'active-l-cbsc-i': index === activeBgIndex }" @click="activeBgIndex = index">
          <div class="lyk-cbsc-item-title flex">{{item.title}}</div>
        </div>
      </div>
    </i-full>
  </div>
</template>
<script type="text/javascript">
import { mapGetters, mapMutations } from 'vuex'
import iFull from 'base/fullScreenMask/fullScreenMask'
export default {
  data() {
    return {
      activeBgIndex: null,
      skinColor: [{
        background: 'linear-gradient(to top, #fddb92 0%, #d1fdff 100%);',
        title: '祝福'
      }, {
        background: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%);',
        title: '柠檬'
      }, {
        background: 'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);',
        title: '松树'
      }, {
        background: 'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);',
        title: '奇迹'
      }]
    }
  },
  created() {
    this._setBackground(this.background || null)
    this.$root.eventHub.$on('lyk-fsm-sure', (code) => {
      if (code == 'chosebg' && (this.activeBgIndex || this.activeBgIndex === 0)) {
        this._setBackground(this.skinColor[this.activeBgIndex])
      }
      this.$root.eventHub.$emit('lykfsmclose')
    })
  },
  computed: {
    ...mapGetters([
      'background'
    ])
  },
  mounted() {
    // this.$root.eventHub.$emit('lykfsmshow', 'chosebg')
  },
  methods: {
    _setBackground(data) {
      if (data) {
        this.$root.eventHub.$emit('lyksetBackground', data)
        this.setBackground(data)
        return true
      }
      if (!data && !this.background) {
        this.$root.eventHub.$emit('lyksetBackground', 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%);')
        this.setBackground('linear-gradient(to top, #accbee 0%, #e7f0fd 100%);')
      }
    },
    ...mapMutations({
      setToken: 'SET_TOKEN',
      setUser: 'SET_USER',
      setBackground: 'SET_BACKGROUND',
      setTokenTime: 'SET_TOKENTIME'
    })
  },
  components: {
    iFull
  }
}

</script>
<style scoped>
.lyk-capsule {
  position: fixed;
  z-index: 9999;
  right: 5%;
  bottom: 10%;
  width: 3%;
  max-width: 50px;
  min-width: 40px;
  background: rgba(255, 255, 255, .4);
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  border-radius: 1000px;
  overflow: hidden;
}

.lyk-capsule:after {
  content: '';
  display: block;
  padding-top: 200%;
}

.lyk-c-content-warp {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.lyk-chose-box-skin-color {
  position: absolute;
  width: 80%;
  height: auto;
  max-height: 80%;
  top: 18%;
  left: 50%;
  transform: translate(-50%, 0);
  align-items: flex-start;
  flex-wrap: wrap;
}

.lyk-cbsc-item {
  width: 11%;
  min-width: 55px;
  max-width: 120px;
  margin: 30px 7%;
  border-radius: 1000px;
  flex-grow: 0;
  position: relative;
}

.lyk-cbsc-item:hover{
	box-shadow: 0 0 10px rgba(0,0,0,.1);
}

.lyk-cbsc-item:after {
  display: block;
  content: '';
  margin-top: 100%;
}

.lyk-cbsc-item-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  font-size: 14px;
  color: #353535;
  transform: translate(0, 100%);
}

.active-l-cbsc-i .lyk-cbsc-item-title {
  color: #67c23a;
}

.now-bg-color{
	width: 80%;
	border-radius: 1000px;
}
.now-bg-color:after{
  display: block;
  content: '';
  margin-top: 100%;
}
</style>
