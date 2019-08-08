<template>
    <div class="login">
        <div id="Photo"></div>
		<p id="title"><b>请登录账号</b><router-link tag="s" to="/reg">注册通道</router-link></p>
		<div id="margin">
			<form method="post">
				<input type="text" v-model="username" placeholder="邮箱/手机号/账号" />
				<input type="password" v-model="password" placeholder="密码" />
				<p class="mess">{{mess}}</p>
				<input type="button" @click="login" value="立即登陆" class="btn" />
			</form>
		</div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      username:'',
      password:'',
      mess:'',
    }
  },
  methods:{
    login(){
      axios({
        url:'/api/login',
        method:'post',
        data:{username:this.username,password:this.password}
      }).then(
        res => {
          // console.log('1',res.data);
          // this.$store.commit('UPDATE_USER',res.data);//更新仓库 user
          if(res.data.err===0){
            this.$router.push('/user')
          }else{
            this.mess = res.data.msg
          }
        }
      )
    }
  }
}
</script>

<style scoped>
#Photo{background: url(../assets/img/tou.png) no-repeat;width:2rem;height:2rem;margin:1.2rem 0 0 4.68rem;border-radius: 50%;background-size: cover;}

#title{font:.53rem/2.01rem "宋体";text-align: center;padding-bottom:.33rem;}
#title b{color:#414141;}
#title s{color:#f98300;}

#margin{width:9.6rem;margin:0 auto;}
form input{width:9.6rem;height:1.17rem;border:0;font:.42rem/1.17rem "宋体";}
form input:nth-child(1){border-bottom:.01rem solid #dcdcdc;border-radius:.43rem .43rem 0 0;}
form input:nth-child(2){border-radius:0 0 .43rem .43rem;}
form input:nth-child(3){border-radius:.43rem;background: #32b4ff;color:#fff;margin-top:1.56rem;}
form [placeholder]{color:#9c9c9c;text-indent:.34rem;}
.mess{font:.42rem/1.17rem "宋体";}
.btn{background: #32b4ff;border:0;border-radius:.43rem;margin-top:2rem;color:#fff;}
</style>

