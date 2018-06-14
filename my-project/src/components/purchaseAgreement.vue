<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>协议管理</el-breadcrumb-item>
					<el-breadcrumb-item>购买协议</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="" style="float: right;line-height:47px;">
				<el-button type="success" style="margin-right:10px;" v-on:click="goEditor">编辑</el-button>
			</div>
		</div>
		<div class="el-title"></div>
		<div class="el-editor">
			<div v-html="input" style="font-weight: bold;text-align: center;font-size:20px;margin-top:10px;margin-bottom:10px;"></div>
			<div v-html="editorContent" style="padding-left:20px;padding-right:20px;padding-bottom:20px;"></div>
		</div>
	</div>
</template>

<script>
	import E from 'wangeditor'
	export default {
		name: 'personalManagement',
		data() {
			return {
				input: '',
				editorContent: ''
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			getData() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				})
				var _this = this;
				this.$http({
						method: 'get',
						url: '/Users/ReChargeProtocol'
					})
					.then(function(res) {
						if(res.data.Result == null) {
							_this.input = '';
							_this.editorContent = '';
						} else {
							_this.input = res.data.Result.PROTOCOLTYPE;
							_this.editorContent = res.data.Result.PROTOCOLCONTENT;
						}
						loading.close();
					})
					.catch(function(err) {
						console.log(err);
					});
			},
			goEditor() {
				this.$router.push({
					path: '/purchaseAgreement/purchaseAgreementEditor'
				})
			},
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
	
	.el-title {
		height: 47px;
		margin: 12px 12px 0px 12px;
		width: auto;
		background-color: #E6EEF4;
		overflow: hidden;
		background-image: url(../../static/image/agr_title2.png);
		background-position: center left;
		background-repeat: no-repeat;
	}
	.el-editor {
		height: auto;
		margin: 0px 12px 12px 12px;
		width: auto;
		background-color: #FFFFFF;
		overflow: hidden;
	}
</style>