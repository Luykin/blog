<template>
	<div class="lyk-full-screen-mask" ref="fsm">
		<el-tooltip class="item" effect="dark" content="返回" placement="right">
			<el-button icon="el-icon-close" circle class="lyk-close-btn" type="danger" @click="$refs.fsm.setAttribute('class', 'lyk-full-screen-mask lyk-fsm-out')"></el-button>
		</el-tooltip>
		<el-tooltip class="item" effect="dark" content="保存" placement="left">
			<el-button icon="el-icon-check" circle class="lyk-sure-btn" type="success" @click="$root.eventHub.$emit('lyk-fsm-sure', code)"></el-button>
		</el-tooltip>
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			code: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
			}
		},
		created() {
			this.$root.eventHub.$on('lykfsmclose', () => {
				this.$refs.fsm.setAttribute('class', 'lyk-full-screen-mask lyk-fsm-out')
			})
			this.$root.eventHub.$on('lykfsmshow', (ret) => {
				if (this.code && this.code === ret) {
					this.$refs.fsm.setAttribute('class', 'lyk-full-screen-mask lyk-fsm-in')
				}
			})
		},
		methods: {

		}
	}

</script>
<style scoped>
.lyk-full-screen-mask {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2147483640;
	background: rgba(255, 255, 255, .9);
	transform: translate(0, 100%);
}

.lyk-close-btn {
	position: absolute;
	left: 3%;
	top: 5%;
	z-index: 1;
}

.lyk-sure-btn {
	position: absolute;
	right: 3%;
	top: 5%;
	z-index: 1;
}

.lyk-fsm-in{
	animation: fullIn .5s ease 1 forwards;
}
.lyk-fsm-out{
	animation: fullOut .5s ease 1 forwards;
}

@keyframes fullIn {
	0% {
		transform: translate(0, 100%);
	}
	100% {
		transform: translate(0, 0);
	}
}

@keyframes fullOut {
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(0, 100%);
	}
}
</style>
