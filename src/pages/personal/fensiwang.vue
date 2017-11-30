<template>
	<div class="fensiwang">
			<h3 class="fensiwang-header">
			  <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png" onclick="window.history.go(-1)">
			  <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/letter.png" class="letterLogo">
		    </h3>
		    <div class="fensiwang-top">
		    	<span><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/touxiang.jpg"></span>
		    	<div class="fensiwangTitle">粉丝大人就是我</div>
				<div class="fensiwangId">id:03452100</div>
				<div class="fensiwangSign">个性签名:人生何时才是尽头,我的春天在何处,是否还有在我身边...</div>
				<div class="fensiwangOther">
					<p><span>关注</span><span>100</span></p>
					<p><span>粉丝</span><span>1340</span></p>
					<p class="attention">+关注</p>
				</div>
		    </div>
		    <div class="fensiwang-bottom">
		    	<div class="touxiang">
		    		<a href="#"><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/touxiang.jpg"></a>
		    		<a href="#"><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/touxiang.jpg"></a>
		    		<a href="#"><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/touxiang.jpg"></a>
		    		<a href="#"><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/touxiang.jpg"></a>
		    		<a href="#" class="jiantou"><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png"></a>

		    	</div>
		    	<div  class="msg" v-for="(item,index) in allCommentList" :key="index" >
					<div class="cirCon_head">
						<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/txd.png">
						<div class="cirCon_head_author">
							<p class='cConHead_authorName'>{{item.user_name}}</p>
							<p class='cConHead_authorTime'>
								{{item.create_time}}  三里屯
							</p>
							
						</div>
						<div class="cirCon_head_like">
							<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/zan_btn_normal.png ">
							<span>506</span>
						</div>
					</div>
					<div class="cirCon_textImg">
						<p class="cirCon_text">{{item.content}}</p>
						<div class="cirCon_img">
							<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/circle_writeImg1.jpg ">
							<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/circle_writeImg2.jpg ">
						</div>
					</div>
					<div class="cirCon_more">
						<div class="cirCon_more_comment"></div>
						<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/more_btn_normal.png ">
					</div>
				</div>
</div>
		    </div>		
	</div>
</template>
<script>
export default {
  name: 'fensiwang',
  data () {
  	return {
  		allCommentList:[{
  			user_name:"脑残粉",
  			create_time:"刚刚",
  			content:"我是偶然一次在电视上看到!"


  		},{
  			user_name:"脑残粉",
  			create_time:"刚刚",
  			content:"我是偶然一次在电视上看到!"


  		}
  		]
  		
    }
  }

}	
</script>
<style  scoped lang="less">
.fensiwang{
	width:100%;
	height:2000/50rem;
	background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/login_bg.png')no-repeat;
	background-size:100% 2000/50rem;
	 .fensiwang-header{
		width:100%;
		height:105/50rem;
		img{
		width:21/50rem;
  		height:37/50rem;
  		margin-top:32/50rem;
  		margin-left:40/50rem;
  		float:left;
		}
		.letterLogo{
		width:45/50rem;
  		height:31/50rem;
  		margin-top:32/50rem;
  		margin-right:40/50rem;
  		float:right;
		}
      }
     .fensiwang-top{
    	width: 100%;
		height: 11.6rem;
    	&>span>img{
    	display:block;
		width:177/50rem;
		height:177/50rem;
		border-radius:50%;
		margin:0 auto;
		}
		.fensiwangTitle{
			width:210/50rem;
			font-size:30/50rem;
			text-align:center;
			color:#FFFFFF;
			margin:10/50rem auto;
		}
		.fensiwangId{
			width:150/50rem;
			font-size:24/50rem;
			color:#D0C7C9;
			text-align:center;
			margin:0 auto;
		}
		.fensiwangSign{
			width:600/50rem;
			font-size:24/50rem;
			color:#D0C7C9;
			margin:44/50rem auto;
		}
		.fensiwangOther{
			width:100%;
			height:140/50rem;
			background:rgba(0,0,0,0.3);
			margin-top:85/50rem;
			p{
				width:33.3%;
				height:80/50rem;
				font-size:30/50rem;
				text-align:center;
				color:#FFFFFF;
				float:left;
				margin-top:30/50rem;
				span{
					display:block;
					border-right:1px solid #6B453B;
				}
			}
			.attention{
				margin-top:50/50rem;
			}
		}
    }
    .fensiwang-bottom{
    	background: #F2EEF9;
    	height: 26.5rem;
    	.touxiang{
    	background: #fff;
    	display: inline-block;
    	margin-top: 10/50rem;
    	margin-left: 0.6rem;
    	width:13.3rem;
    	height:150/50rem;
    	// margin:30/50rem auto;
    	padding:0.2rem;
    	border:1px solid #F0EEF1;
    	border-radius:10/50rem;
    		// a{
    		// display:block;
    		// width:15%;
		    // height:100/50rem;
		    // margin-right:30/50rem;
		    // float:left;

    		img{
    			
		        width:113/50rem;
		        height:113/50rem;
		        margin-left: 20/50rem;
		        margin-top: 17/50rem;
		        margin-right: -0.3rem;
		        display: inline-block;
    		}
    	// }
    	.jiantou{
    		width:19/50rem;
		    height:32/50rem;
		    margin-top:30/50rem;
    		float:right;
    		&>img{
    			width:19/50rem;
		        height:32/50rem;
		        vertical-align:middle;
		        margin-left: -20/50rem;
    		}
    	}
    }
    .msg{
    	margin-top:20/50rem;
				padding:0 0.8rem 0 0.8rem;
				box-sizing:border-box;
				div.cirCon_head{
					overflow:hidden;
					span{
							color:#959595;
							font-size:24/50rem;
						}
					&>img{
						wdith:70/50rem;
						height:70/50rem;
						float:left;
						margin-right:25/50rem;
					}
					&>.cirCon_head_author{
						float:left;
						p.cConHead_authorName{
							font-size:31/50rem;
							color:#A54BE8;
						}
						p.cConHead_authorTime{
							color:#959595;
							font-size:24/50rem;
						}
					}
					.cirCon_head_like{
						float:right;
						img{
							width:36/50rem;
							height:36/50rem;
						}
					}
				}
				.cirCon_textImg{

					margin-left:95/50rem;
					p.cirCon_text{
						font-size:34/50rem;
						
					}
					.cirCon_img{
						margin-top:20/50rem;
						img{
							width:173/50rem;
							height:173/50rem;
						}
					}

				}
				.cirCon_more{
					
					height:95/50rem;
					overflow:hidden;
					.cirCon_more_comment{
						float:left;
						width:560/50rem;
						height:95/50rem;
					}
					img{
						float:right;
						width:77/50rem;
						height:46/50rem;
					}
				}

    }
    }
	

}


  

</style>