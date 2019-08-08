<template>
  <div class="home">
    <Slider :banner="banner" dataName="banner" ></Slider>
    <Nav></Nav>
    <List :list="home" dataName="home"></List>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import Nav from '@/components/Nav'
import List from '@/components/List';
//从vuex中吧mapGetters引入这样就可以拿到数据了
import { mapGetters } from 'vuex';
     
export default {
  name:'home',
  components:{Slider,Nav,List},
  mounted(){
    // 此时这两条是并行无关联，因为没有负载，所以不用
    this.$store.dispatch('UPDATE_HOME');
    this.$store.dispatch('UPDATE_BANNER');
  },
  computed:mapGetters([
  //这里调用就要找getters
    'home','banner'
  ])
  
}
</script>

