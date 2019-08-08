<template>
	<ul>
		<router-link tag="li" to="/Column">
			<a href="javascript:;">
				<i></i>
				<h3>免费咨询</h3>
			</a>
		</router-link>
		<router-link tag="li" to="/Column">
			<a href="javascript:;">
				<i class="i2"></i>
				<h3>主任医师</h3>
			</a>
		</router-link>
		<router-link tag="li" to="/Column">
			<a href="javascript:;">
				<i class="i3"></i>
				<h3>医院介绍</h3>
			</a>
		</router-link>
		<router-link tag="li" to="/Column">
			<a href="javascript:;">
				<i class="i4"></i>
				<h3>科室介绍</h3>
			</a>
		</router-link>
	</ul>
</template>

<style scoped>
ul{margin:.25rem 0 0 .23rem;overflow: hidden;}
ul li{margin:0 .22rem .2rem 0;background:#fff;width:5.05rem;height:4.95rem;float: left;}
ul li a{width:5.05rem;height:4.95rem;display: block;overflow: hidden;}
ul li a i{display:block;width:2.76rem;height:2.75rem;background:url(../assets/img/t2.png) no-repeat;margin:.73rem 0 0 1.17rem;
			background-size:cover;}
ul li a .i2{background-position:-2.76rem 0}
ul li a .i3{background-position:-5.52rem 0}
ul li a .i4{background-position:-8.28rem 0}
ul li a h3{font:.58rem/1.39rem "宋体";color:#000;text-align: center;}
</style>

