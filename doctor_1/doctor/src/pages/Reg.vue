<template>
    <div class="reg">
    <div>
		</div>
		<div class="box3">
			<div id="tou">
				<img id="backimg" src="../assets/img/t3.png">
			</div>
			<input 	type="file" ref="f1" id="ff" @change="reads($event)"/>
			<label for="ff">点击上传头像</label>
		</div>
		<p id="title">请注册账号</p>  
      <div id="margin">
        <form method="post">
          <input type="text" v-model="nikename" placeholder="昵称" />
          <input type="text" v-model="username" placeholder="账号" />
          <input type="password" v-model="password" placeholder="密码" />
          <input type="password" placeholder="确认密码" v-model="confirm" />
          <br><h4>{{mess}}</h4>
          <input type="button" class="btn" @click="reg" value="立即注册" />
          <router-link tag="p" id="title" to="/login">已有账号？去登陆</router-link>
        </form>
      </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
  data(){
    return {
		// 获取dom值，赋值到服务器
      username:'',
      password:'',
      nikename:'',
      mess:'',
      confirm:''
    }
  },
  methods:{
    reg(){
      // 做一个状态用来最终判断
      let user=0;
      let pass=0;
      let pass2=0;
      // 表单验证
      let name = /^[1-9]{5,10}$/;
      if(!name.test(this.username) && this.username != ''){
            alert('账号:请输入5~11个1~9之间的数字')
            user = 0
        }else{
            user = 1
        }
      let pas = /^[a-zA-Z]\w{5,17}$/;
      if(!pas.test(this.password) && this.password != ''){
            alert('密码:字母开头，长度在6~18之间，只能包含字母、数字和下划线')
            pass = 0
        }else{
          pass = 1
        }
      if(this.password != this.confirm && this.confirm != ''){
        alert('两次输入的密码不一致')
        pass2 = 0
      }else{
        pass2 = 1
      }
      if(user && pass && pass2){
        alert("注册成功")
        // 要是表单验证通过了就存库
        let formData = new FormData();
        formData.append('username',this.username)
        formData.append('password',this.password)
        formData.append('nikename',this.nikename)
        formData.append('icon',this.$refs.f1.files[0])
        axios({
          url:'/api/reg',
          method:'post',
          data:formData
        }).then(
          // 如果注册成功err为0，则跳转至登录，然后this.mess = res.data.msg
          res => res.data.err===0 ? this.$router.push('/login') : this.mess = res.data.msg
        )
      }

    },
// 头像上传时候实时预览
    reads:function(event) {
      let obj = event.path[0];
      
      console.log(event)
      let file = obj.files[0];
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(ev) {
				$("#backimg").attr("src", ev.target.result);
			}
		}
    
  }
}
</script>

<style scoped>
#Photo{background: url(../assets/img/tou.png) no-repeat;width:2rem;height:2rem;margin:1.2rem 0 0 4.68rem;border-radius: 50%;background-size: cover;}

#title{font:.53rem/2.01rem "宋体";text-align: center;padding-bottom:.33rem;color:#414141;}

#margin{width:9.6rem;margin:0 auto;}
form input{width:9.6rem;height:1.17rem;border:0;font:.42rem/1.17rem "宋体";border-radius:.43rem;margin:.1rem;}
form input.btn{background: #32b4ff;color:#fff;margin-top:1rem;}
form [placeholder]{color:#9c9c9c;text-indent:.34rem;}
form>h4{font:.42rem/1.17rem "宋体";}
.box3{margin:1rem auto 1rem;width:2rem;height:2rem;border-radius: 50%;position: relative;}
.box3 input{display:none;color:#9c9c9c;}
.box3 label{display:block;width:3rem;height:.01rem;font:.42rem/1.17rem "宋体";color:c4c4c4;
			text-align:center;cursor:pointer;position: absolute;bottom:-.3rem;left:0;right:0;margin: auto;}
#tou{position: absolute;}
#tou img{display: block;width:2rem;height:2rem;border-radius: 50%;overflow: hidden;}
</style>


