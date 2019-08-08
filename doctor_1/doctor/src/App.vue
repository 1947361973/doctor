<template>
  <div id="app">
    <!-- bFoot用的直接跳过getters，去找state的方法 -->
    <Loading v-show="bLoading"></Loading>
    <Header v-show="$store.state.bHead"></Header>
    <router-view></router-view>
    <!-- bFoot用的直接跳过getters，去找state的方法 -->
    <Footer  v-show="bFoot"></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './pages/Loading'
// 这里的引入是另一个调用数据方法，直接跳过getters，去找state
import { mapState } from 'vuex';

export default {
  name: 'app',
  // 数据观测1watch
  watch:{
    // 2watch首次运行，页面刷新就会运行
    $route:{
      handler({path}){
        console.log('app',path)
        //home/follow/column true true
        //user/ false true
        //login/reg/detail false false

        if(/home|column|detail/.test(path)){
          // 请求this.$store.dispatch('请求类型',payload)
          this.$store.dispatch('VIEW_HEAD',true)
          this.$store.dispatch('VIEW_FOOT',true)
        }
        if(/user|consult/.test(path)){
          this.$store.dispatch('VIEW_HEAD',false)
          this.$store.dispatch('VIEW_FOOT',true)
        }
        if(/login|reg/.test(path)){
          this.$store.dispatch('VIEW_HEAD',false)
          this.$store.dispatch('VIEW_FOOT',false)
        }

      },
      immediate:true
    }
  },
  components: {
    Header,Footer,Loading
  },
  // 直接跳过getters，拿到数据
  computed:mapState(['bFoot','bLoading'])
}
</script>

