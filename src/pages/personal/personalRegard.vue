<template>
	<div class="personal-box">
		<div class="top">
			<router-link tag='a' to='/personalIndex'>
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png">
			</router-link>
			<span>关于</span>
		</div>
		<div class="cont">
			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/about_logo.png">
			<span>V1.0版</span>
		</div>
		<div class="btn" :plain="true" @click="open2">
			<span>检查更新</span>
		</div>
		<div class="bq">
			版权所有
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"personalRegard",
		data(){
			return{

			}
		},
		methods: {
			 open2() {
        this.$message({
        	duration:1000,
          message: '已经是最新的了',
          type: 'success'
        });
      }
    }
	}
</script>
<style  scoped lang="less">
	.personal-box{
		background: url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/login_bg.png) no-repeat;
		height: 1325/50rem;
	}
	.top{
		margin-top: 30/50rem;
		display: inline-block;
	}
	.top>a>img{
        width: 20/50rem;
        height: 38/50rem;
        margin-left: 45/50rem;
	}
	.top>span{
		color: #FEFEFE;
		font-size: 40/50rem;
		margin-left: 264/50rem;
	}
	.cont{
		width: 260/50rem;
		height: 300/50rem;
		margin-top: 200/50rem;
		margin-left: 250/50rem;
	}
	.cont>img{
		width: 260/50rem;
		height: 300/50rem;
	}
	.cont>span{
		display: inline-block;
		color: #a54be8;
		font-size: 30/50rem;
		margin-left: 150/50rem;
		margin-top: -200/50rem;
	}
	.btn{
		width: 515/50rem;
		height: 85/50rem;
		margin-top: 380/50rem;
		margin-left: 120/50rem;
		background: #A54BE8;
	}
	.btn>span{
		color: #F3EFF5;
		font-size: 30/50rem;
		margin-left: 200/50rem;
	}
	.bq{
		margin-top: 140/50rem;
		color: #937f9c;
		font-size: 24/50rem;
		margin-left: 323/50rem;
		margin-bottom: 76/50rem;
	}

</style>