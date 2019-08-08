<template>
	<div class="column">
    <!-- 2.$store.state.follw跨过了mapGetters直接找state拿数据的方法 -->
		<List :list="$store.state.list" dataName="list"></List>
	</div>
</template>

<script>
import List from '@/components/List';

//type：2.
//import {mapState} from 'vuex';

export default {
  components:{List},
  mounted(){
    //1.发送一个请求出去，这个请求叫UPDATE_LIST，没有带数据过去。
    this.$store.dispatch('UPDATE_LIST')
    //用type传请求类型方法：用这个方法getters里面的column就可以删除了
    // 1.this.$store.dispatch({type:xx,payload:xx})
    this.$store.dispatch({type:'UPDATE_COLUMN'})
  }
  //type请求3.
  //,computed:mapState接收type请求回来的数据，这个column可以用来做页面数据渲染，v-of等渲染
  //computed:mapState(['column'])
}
</script>

<style scoped>
#doctor li{background:#fff;margin:.1rem .25rem;border-radius:.08rem;border:.01rem solid #dddddd;}
#doctor li a .doctor-t{border-bottom:.01rem solid #dddddd;height:2.16rem;}
#doctor li a .doctor-t img{display:block;float:left;margin:.26rem 0 .34rem .18rem;width:1.56rem;height:1.56rem;}
#doctor li a .doctor-t .xinxi{float:left;margin:.17rem 0 0 .44rem;}
#doctor li a .doctor-t .xinxi b{font:700 .38rem/.67rem "宋体";color:#333;margin:0 .24rem .04rem 0;}
#doctor li a .doctor-t .xinxi span{font:.29rem/.57rem "宋体";color:#595758;}
#doctor li a .doctor-t .xinxi span.bottom{font:.29rem/.48rem "宋体";color:#595758;}

#doctor li a .doctor-b{width:100%;}
#doctor li a .doctor-b span{width:1.48rem;height:.46rem;background:#6ec7ff;font:.28rem/.46rem "宋体";border-radius:.11rem;margin-right:.22rem;}
#doctor li a .doctor-b span.one{margin-left:.18rem;}
</style>

