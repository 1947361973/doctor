<template>
	<div>
		<div class="footer">
			<a href="#">
				<i class="i1"></i><router-link tag="span" to="/home">首页</router-link>
			</a>
			<a href="#">
				<i class="i2"></i><router-link tag="span" to="/column">免费咨询</router-link>
			</a>
			<a href="#">
				<i class="i3"></i><router-link tag="span" to="/consult">专家门诊</router-link>
			</a>
			<a href="#">
				<i class="i4"></i><router-link tag="span" to="/user">个人中心</router-link>
			</a>
		</div>
		<div class="nul"></div>
	</div>
</template>

<style scoped>
.footer{height:1.43rem;display:flex;justify-content: space-between;background:#fff;padding:0 .48rem;overflow: hidden;position: fixed;bottom: 0;left: 0;right:0;}
.footer a{padding-top:.2rem;display: block;width:2rem;}
.footer a i{display:block;width:.56rem;height:.56rem;background:url(../assets/img/footer.png) no-repeat;
			background-size:cover;margin:0 auto;}
.footer a .i2{background-position:-.56rem 0;}
.footer a .i3{background-position:-1.12rem 0;}
.footer a .i4{background-position:-1.68rem 0;}
.footer a span{display:block;color:#6b6b6b;text-align: center;font:.35rem/.75rem "宋体";height:.75rem;}
.nul{height:1.43rem;}
</style>

