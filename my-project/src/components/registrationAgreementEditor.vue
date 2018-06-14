<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>协议管理</el-breadcrumb-item>
					<el-breadcrumb-item>注册协议</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="" style="float: right;line-height:47px;">
				<!--<el-button type="success" style="margin-right:10px;">编辑</el-button>-->
			</div>
		</div>
		<div class="el-title"></div>
		<div class="el-editor">
			<div class="" style="margin-top:17px;margin-bottom:20px;">
				<span style="margin-left:43px;font-size:14px;color:#606266;margin-right:13px;">标题</span>
				<el-input placeholder="请输入标题" v-model="input" clearable size="small">
				</el-input>
			</div>
			<div class="" style="position: relative;">
				<span style="left:43px;font-size:14px;color:#606266;position: absolute;">内容</span>
				<div id="editorElem" style="text-align:left;margin-left:90px;margin-right:25px;"></div>
				<el-button type="success" style="margin-left:90px;margin-top:30px;margin-bottom:37px;" v-on:click="putEditor">{{btnText}}</el-button>
			</div>
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
				editorContent: '',
				editorContent1: ''
			}
		},
		computed: {
			btnText() {
				if(this.isBtnLoading) return '提交中...';
				return '提交';
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
						url: '/Users/RegisterProtocol'
					})
					.then(function(res) {
						if(res.data.Result == null) {
							_this.input = '';
							_this.editorContent1 = '';
						} else {
							_this.input = res.data.Result.PROTOCOLTYPE;
							_this.editorContent1 = res.data.Result.PROTOCOLCONTENT;
						}
						_this.editorLoading();
						loading.close();
					})
					.catch(function(err) {
						console.log(err);
					});
			},
			editorLoading() {
				var editor = new E('#editorElem')
				editor.customConfig.uploadImgShowBase64 = true
				this.editorContent = this.editorContent1
				editor.customConfig.onchange = (html) => {
					this.editorContent = html
				}
				editor.create();
				editor.txt.html(this.editorContent1)
			},
			putEditor() {
				var _this = this;
				_this.isBtnLoading = true;
				var params = new URLSearchParams();
				params.append('PROTOCOLTYPE', this.input);
				params.append('PROTOCOLCONTENT', this.editorContent);
				this.$http({
						method: 'post',
						url: '/Back_ProtocolSet/UpdateRegisterProtocol',
						data: params
					})
					.then(function(res) {
						var code = res.data.Status;
						var msg = res.data.Message;
						if(code == '1') {
							_this.$message({
								message: msg,
								type: 'success'
							});
							_this.$router.push({
								path: '/registrationAgreement'
							});
						} else {
							_this.$message({
								message: msg,
								type: 'warning'
							});
						}
						_this.isBtnLoading = false;
					})
					.catch(function(err) {
						console.log(err);
					});
			}
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
		background-image: url(../../static/image/agr_title1.png);
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
	
	.el-input {
		width: 206px;
	}
</style>