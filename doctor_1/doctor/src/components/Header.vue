<template>
	<div class="header">
			<i @click="goback"></i><span>医生在线</span>
	</div>
</template>

<script>
export default {
	methods:{
		goback(){
			this.$router.go(-1)
		}
	}
}
</script>


<style scoped>
.header{height:1.32rem;background: #098fe4;font:.58rem/1.32rem "宋体";color:#fff;text-align: center;}
.header i{display:inline-block;width:.48rem;height:.48rem;vertical-align: middle;border-top:.05rem solid #fff;
			border-left:.05rem solid #fff;transform:rotate(-45deg);position:relative;left:-3.7rem;}
</style>

