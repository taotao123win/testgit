<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>健康信息统计</el-breadcrumb-item>
					<el-breadcrumb-item>小屋健康参数</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="" style="float: right;line-height:47px;">
				<!--<el-button type="success" v-on:click="jqprint">打印</el-button>
				<el-button type="success" style="margin-right:10px;" v-on:click="exportExcel">导出</el-button>-->
			</div>
		</div>
		<div class="el-table">
			<ul class="info-one">
				<li><span>1、器官-整体观</span>
					<ul class="info-two">
						<li><span>头:</span><span>10g</span></li>
						<li><span>胸:</span><span>10g</span></li>
						<li><span>腹:</span><span>10g</span></li>
						<li><span>骨盆:</span><span>10g</span></li>
						<li><span>关节:</span><span>10g</span></li>
						<li><span>神经:</span><span>10g</span></li>
					</ul>
				</li>
				<li><span>2、头部-整体（病质药）</span>
					<ul class="info-two">
						<li><span>咽炎:</span><span>10g</span></li>
						<li><span>乳突炎:</span><span>10g</span></li>
						<li><span>耳炎:</span><span>10g</span></li>
						<li><span>骨炎:</span><span>10g</span></li>
						<li><span>窦眼:</span><span>10g</span></li>
					</ul>
				</li>
				<li><span>3、头部-细节</span>
					<p>1）眼</p>
					<ul class="info-two">
						<li><span>视网膜和脉络膜:</span><span>10g</span></li>
						<li><span>巩膜:</span><span>10g</span></li>
						<li><span>虹膜:</span><span>10g</span></li>
						<li><span>结膜:</span><span>10g</span></li>
						<li><span>视神经:</span><span>10g</span></li>
					</ul>
				</li>
				<li><span></span>
					<p>2）上额窦</p>
					<ul class="info-two">
						<li><span>鼻旁膜:</span><span>10g</span></li>
						<li><span>额窦:</span><span>10g</span></li>
						<li><span>蝶窦:</span><span>10g</span></li>
						<li><span>上颌窦:</span><span>10g</span></li>
						<li><span>鼻粘膜:</span><span>10g</span></li>
						<li><span>筛窦:</span><span>10g</span></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.el-top {
		width: 100%;
		background-color: #FFFFFF;
		height: 47px;
		overflow: hidden;
	}
	
	.el-breadcrumb {
		height: 47px;
		line-height: 47px;
		padding-left: 10px;
		box-sizing: border-box;
	}
	
	.el-button--success {
		padding: 7px 20px;
	}
	
	
	.el-table {
		margin: 12px 12px 0px 12px;
		width: auto;
		background-color: #FFFFFF;
		padding-bottom:10px;
		margin-bottom:10px;
	}
	
	.info-one {
		padding-left: 20px;
		padding-right: 20px;
	}
	
	.info-one li {
		line-height: 30px;
	}
	
	.info-two li {
		display: inline-block;
		padding-left:10px;
		padding-right: 10px;
	}
</style>