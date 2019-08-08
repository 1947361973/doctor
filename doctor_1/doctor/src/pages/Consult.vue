<template>
  <main>
			<ul>
				<li><span>姓名：</span><input type="text" placeholder="请输入真实姓名" /></li>
				<li><span>性别：</span><input type="text" placeholder="请输入性别" /></li>
				<li><span>手机号：</span><input type="number" placeholder="请输入11位手机号" /></li>
				<li class="last"><span>出生日期：</span><input type="text" placeholder="请输入出生日期" /></li>
			</ul>
			<div class="box">
				<span>姓名：</span>
				<select>
				<option selected="selected">--省--</option>
				<option>湖北省</option> 
				<option>湖南省</option> 
				<option>台湾省</option>
				<option>日本省</option>
				</select>
				<select>
				<option selected="selected">--市--</option>
				<option>北京市</option> 
				<option>上海市</option> 
				<option>广州市</option>
				<option>深圳市</option>
				</select>
			</div>
			<div class="box2">
				<span>病状描述：</span>
				<textarea placeholder="请详细描述您的症状..."></textarea>
			</div>
			<div class="box3">
				<span>上传附件：</span>
				<input 	type="file" id="ff"/>
				<label for="ff" ></label>
			</div>
			<input type="submit" value="确认" class="sub">
		</main>
</template>


<style scoped>
main{font:.34rem/.8rem "宋体";color:#9c9c9c;background: #fff;padding:.1rem 0;}
main ul{margin-top:.78rem;}
main ul li{font:.34rem/1.06rem "宋体";width:9.96rem;border:.01rem solid #dddddd;border-radius:.08rem;margin:0 0 .30rem .38rem;}
main ul li span{margin-left:.54rem;}
main ul li input{border:0;width:7.62rem;height:1.06rem;color:#000;}

main ul li [placeholder]{color:#c6c6c6;font:.34rem/1.06rem "宋体";}

main .box{color:#9c9c9c;margin:0 0 .43rem .38rem;}
main .box select{width:3.82rem;height:.8rem;text-align: center;border:.01rem solid #dddddd;font:.34rem/.8rem "宋体";color:#9c9c9c;}

main .box2{color:#9c9c9c;margin:0 0 .36rem .38rem;}
main .box2 span{vertical-align: top;}
main .box2 textarea{background:#fff;border:.01rem solid #dddddd;width:8.06rem;height:2.86rem;resize:none;}
main .box2 [placeholder]{color:#c6c6c6;font:.34rem/1.06rem "宋体";}
main .box3{margin-left:.38rem;}
main .box3 input{display:none;color:#9c9c9c;}
main .box3 span{display:block;float: left;}
main .box3 label{display:block;float: left;width:1.58rem;height:1.58rem;font:.78rem/1.58rem "宋体";color:c4c4c4;
					background-size:.74rem .74rem;background:#fff url(../assets/img/t3.png) no-repeat center;text-align:center;cursor:pointer;
					border:.02rem solid #dddddd;border-radius:.08rem;}

main .sub{width:10rem;height:1.1rem;background:#098fe4;border:0;border-radius:.08rem;margin:1.21rem 0 0 .38rem;font:.64rem/1.1rem "宋体";color:#fff;}
</style>



