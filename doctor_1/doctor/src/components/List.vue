<template>
	<ul id="doctor">
		<router-link tag="li" :to="`/detail/${item._id}?dataName=${dataName}`" v-for="(item) of list" :key="item._id">
			<a href="javascript:;">
				<div class="doctor-t">
					<img :src="`${baseUrl}${item.tou}`">
					<div class="xinxi">
						<b>{{item.name}}</b><span>{{item.keshi}}</span><br/>
						<span class="bottom">{{item.Hospital}}</span><br/>
						<span class="bottom last">专长：{{item.major}}</span>
					</div>
				</div>
				<div class="doctor-b">
					<span class="one">{{item.Grade}}</span>
					<span>{{item.Grade}}</span>
					<span>{{item.Grade}}</span>
					<span>{{item.Grade}}</span>
				</div>
			</a>
		</router-link>	
	</ul>
</template>

<script>
export default {
	props:['list','dataName']
}
</script>

<style scoped>
#doctor li{background:#fff;margin:.1rem .25rem;border-radius:.08rem;border:.01rem solid #dddddd;}
#doctor li a .doctor-t{border-bottom:.01rem solid #dddddd;height:2.16rem;}
#doctor li a .doctor-t img{display:block;float:left;margin:.26rem 0 .34rem .18rem;width:1.56rem;height:1.56rem;border-radius: 50%;overflow: hidden;}
#doctor li a .doctor-t .xinxi{float:left;margin:.17rem 0 0 .44rem;}
#doctor li a .doctor-t .xinxi b{font:700 .38rem/.67rem "宋体";color:#333;margin:0 .24rem .04rem 0;}
#doctor li a .doctor-t .xinxi span{font:.29rem/.57rem "宋体";color:#595758;}
#doctor li a .doctor-t .xinxi span.bottom{font:.29rem/.48rem "宋体";color:#595758;}

#doctor li a .doctor-b{width:100%;}
#doctor li a .doctor-b span{width:1.48rem;height:.46rem;background:#6ec7ff;font:.19rem/.46rem "宋体";border-radius:.11rem;margin-right:.22rem;}
#doctor li a .doctor-b span.one{margin-left:.18rem;}
</style>

