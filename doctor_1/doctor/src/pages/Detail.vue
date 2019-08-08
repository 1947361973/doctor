<template>
<div class="detail">
	<ul>
		<li>
			<a href="javascript:;">
				<div class="doctor-t">
					<img :src="`${baseUrl}${this.detail.tou}`">
					<div class="xinxi">
						<b>{{this.detail.name}}</b><span>{{this.detail.keshi}}</span><br/>
						<span class="bottom">{{this.detail.Hospital}}</span><br/>
						<span class="bottom ">专长：{{this.detail.major}}</span><br/>
						<span class="bottom last">时间：{{this.detail.time | date}}</span>
					</div>
				</div>
				<div class="doctor-b">
					<span>{{this.detail.Grade1 || this.detail.Grade}}</span>
					<span>{{this.detail.Grade2 || this.detail.Grade}}</span>
					<span>{{this.detail.Grade3 || this.detail.Grade}}</span>
					<span>{{this.detail.Grade4 || this.detail.Grade}}</span>
				</div>
			</a>
		</li>
	</ul>
		<div id="brief" v-html="this.detail.brief"></div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name:'Detail',
  computed:mapGetters(['detail']),
  created(){
    let id = this.$route.params.id;
	let dataName = this.$route.query.dataName;
	// type类型提交
	// 因为用的是type形式，所以发送到actions是一个复合参数，包含了type和payload，所以这里要结构{ type, payload }
    // 又因为payload中又包含了数组对象，所以在Detail里先解构一次，到了这边再解构一次这样actions就可以分别拿到数据了
    this.$store.dispatch({type:'UPDATE_DETAIL',payload:{id:id,dataName:dataName}})
  }   
}
</script>


<style scoped>
ul li{background:#fff;margin-bottom:.21rem;}
ul li a .doctor-t{border-bottom:.01rem solid #dddddd;overflow: hidden;}
ul li a .doctor-t img{display:block;float:left;margin:.26rem 0 .34rem .18rem;width:1.56rem;height:1.56rem;border-radius: 50%;overflow: hidden;}
ul li a .doctor-t .xinxi{float:left;margin:.17rem 0 0 .44rem;overflow: hidden;}
ul li a .doctor-t .xinxi b{font:700 .38rem/.67rem "宋体";color:#333;margin:0 .24rem .04rem 0;}
ul li a .doctor-t .xinxi span{font:.29rem/.57rem "宋体";color:#595758;}

ul li a .doctor-b{width:100%;display:flex;}
ul li a .doctor-b span{background:#6ec7ff;font:.28rem/.46rem "宋体";border-radius:.11rem;margin:.11rem;}

#brief{margin:0 .24rem .23rem;width:9.3rem;height:12.54rem;background:#fff;border-radius:.08rem;font:.30rem/.76rem "宋体";padding:0 .5rem;text-indent: 2em;}
#brief >>> h3{text-align: center;}
</style>

