<template>
    <div class="content">
			<div class="header">
				<h2><img :src="baseUrl + user.icon" alt="" /></h2>
				<div class="user-box">
					<a>{{user.nikename}}</a><br>
					<a href="javaScript:;" @click="logout">注销</a>
				</div>
				<ul class="clear">
					<li>
						<span>{{user.follow}}</span>
						<p>关注</p>
					</li>
					<li>
						<span>{{user.fans}}</span>
						<p class="end">粉丝</p>
					</li>
				</ul>
			</div>
			<div class="docList">
				<ul>
					<li class="gk-text list">
						<i class="i1"></i>
						<p>公开博文</p>
						<b></b>
						<span>0</span>
					</li>
					<li class="mm-text list">
						<i class="i2"></i>
						<p>秘密博文</p>
						<b></b>
						<span>0</span>
					</li>
					<li class="cg-text list">
						<i class="i3"></i>
						<p>草稿箱</p>
						<b></b>
						<span>0</span>
					</li>
					<li class="sc-text list">
						<i class="i4"></i>
						<p>收藏夹</p>
						<b></b>
						<span>0</span>
					</li>
					<li class="my_cz list">
						<i class="i5"></i>
						<p>设置</p>
					</li>
				</ul>
			</div>
		</div>
</template>

<script>
// import '../assets/css/user.css';//全局
import router from '../plugins/router'
// import store from '../plugins/store.js';
// import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      user:{}
    }
  },
  beforeRouteEnter(to,from,next){
	//   console.log(store.state.user.err)
    //异步条件方法
    axios({
      url:'/api/user'
    }).then(
      res=>{
        if(res.data.err===0){
          next(_this=>_this.user = res.data.data)
        }else{
		// 通过接口res来的数据判断是否登录，然后跳转到login
          next('/login')
        }
      }
	)
	//状态管理同步条件方法直接获取state里面err的数据
// 	if(store.state.user.err===0){
// 		next()
// 	}else{
// 		next('/login')	
// 	}
  },
//   computed:mapGetters(['user']),
  methods:{
    logout(){
      axios({
        url:'/api/logout',
        method:'delete'
      }).then(
        res=>res.data.err === 0 && this.$router.push('/login')
      )
    }
  }
}
</script>


<style scoped>
.content{width:100%; margin:0 auto; margin-bottom:0.8rem;}
.content .header{width:100%;height:4.65rem; background:#69b9e7;padding-top: 1rem;}
.header h2{height:1.5rem; border-radius:50%; margin:0 auto;}
.header h2 img{display: block;width: 1.5rem;height:1.5rem;margin:0 auto;border-radius: 50%;overflow: hidden;}
.header .user-box{width:4rem; font:0.4rem/3 "宋体"; color:#fff; margin:0 auto;display: flex;justify-content: space-between;}
.user-box a{color:#fff;}
.header ul{ margin-top:0.3rem;}
.header ul li{width:50%;height:1.2rem; float:left; color:#fff;background:#69b9e7;}
.header ul li span{height:.44rem; line-height:.44rem; text-align:center; display:block; font-size:0.5rem;}
.header ul li p{ text-align:center; font-size:0.5rem;height:0.75rem; line-height:0.75rem; border-right:1px solid #fff;}
.header ul li p.end{ border:0;}

.content .docList{width:100%; margin:0 auto; margin-top:0.45rem;}
.docList ul{ border-top:1px solid #7b7c7c;}
.docList ul li{ background:#fff;height:1.24rem; border-top:1px solid #bcbbba; border-bottom:1px solid #7b7c7c;}
.docList ul li span{ float:right;margin-right:0.19rem; margin-top:0.41rem;font-size:0.5rem;}
.docList ul li b{width:0.27rem;height:0.31rem; background:url(../assets/img/u7.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.45rem; margin-top:0.56rem;}

.docList ul li.list i{width:0.48rem;height:0.48rem; background-size:100%; float:left; margin-left:0.38rem; margin-top:0.4rem;}
.docList ul li.list i.i1{background: url(../assets/img/u2.png)no-repeat;}
.docList ul li.list i.i2{background: url(../assets/img/u3.png)no-repeat;}
.docList ul li.list i.i3{background: url(../assets/img/u4.png)no-repeat;}
.docList ul li.list i.i4{background: url(../assets/img/u5.png)no-repeat;}
.docList ul li.list i.i5{background: url(../assets/img/u6.png)no-repeat;}

li.list p{ float:left; font-size:0.5rem;margin-left:0.39rem;line-height: 1.24rem;}

.docList ul .my_cz{ margin-top:0.45rem;}
</style>

