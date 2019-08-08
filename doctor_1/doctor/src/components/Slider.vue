<template>
  <div class="banner">
    <ul class="clearfix">
      <!-- <router-link :to="`/Column/${item._id}?dataName=${dataName}`" tag='li' v-for="(item,index) of banner" :key="item._id"> -->
      <router-link to="/Column" tag='li' v-for="(item,index) of banner" :key="item._id">
        <!-- 这里baseUrl在main里面已经把localhost：3000注册到了vue实例中，这里拿到的是跨域的服务器中的图片地址 -->
        <img :src="`${baseUrl}${item.src}`" alt="">
        <div class="text-box">
          <h2>{{index+1}}.{{item.name1}}</h2> 
          <p>{{index+1}}.{{item.name2}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import Swipe from 'swipe';
import $ from 'jquery';

export default {
  //钩子函数mounted是页面渲染完毕了的状态，然后再执行轮播图才会有效果
  
  props:['banner','dataName'],
  updated(){
    new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
}
</script>
<style scoped>
.banner{position: relative;overflow: hidden; z-index: 1}
.banner ul li{width:10.8rem;float:left;position: relative;}
.banner ul li img{width:100%; display:block;height:5.8rem;}
.banner ul li .text-box{width:10.2rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.45rem; font-weight:normal; margin-top:0.22rem; line-height:0.45rem; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:0.35rem;font-size:0.3rem;}

.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}
</style>
