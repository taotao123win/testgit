<template>
	<div class="" style="height:100%;width:100%;position: relative;overflow: hidden;background-image: url(../../static/image/login_bj2.jpg);background-position: center;background-repeat: no-repeat;background-size:cover;">
		<div class="" style="width:290px;height:350px;position: absolute;top:26%;right: 10%;background-color:#FFFFFF;border-radius:3px;">
		 <el-form class="login-container">
		<h3 style="text-align: right;line-height:40px;font-size:14px;color:#D3D3D3;">智能健康管理平台</h3>
		<img src="../../static/image/login_bj1.png" style="margin: 0 auto 10px auto;display: block;width:72px;height:75px;"/>
		<el-form-item>
			<el-input type="text" v-model="username" auto-complete="off" placeholder="账号" prefix-icon="el-icon-third-yonghuming" size="medium"></el-input>
		</el-form-item>
		<el-form-item>
			<el-input type="password" v-model="pwd" auto-complete="off" placeholder="密码" prefix-icon="el-icon-third-mima" size="medium"></el-input>
		</el-form-item>
		<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
		<el-form-item style="width:100%;">
			<el-button type="primary" style="width:100%;" @click="handleLogin" :loading="isBtnLoading">{{btnText}}</el-button>
		</el-form-item>
	</el-form>	
		</div>		
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				username: '',
				pwd: '',
				checked: true,
				isBtnLoading: false
			};
		},
		computed: {
    btnText() {
      if (this.isBtnLoading) return '登录中...';
      return '登录';
    }
  },
		methods: {
			handleLogin() {
				 var _this = this;
				_this.isBtnLoading = true;
				if(this.username == '') {
					_this.$message({
						message: '用户名不能为空',
						type: 'warning'
					});
					_this.isBtnLoading = false;
				} else if(this.pwd == '') {
					_this.$message({
						message: '密码不能为空',
						type: 'warning'
					});
					_this.isBtnLoading = false;
				} else {
					this.$http({
							method: 'get',
							url: '/Users/Login',
							params: {
								username: this.username,
								password: this.pwd,
								loginflag:1
							}
						})
						.then(function(res) {
							var code = res.data.Status;
							var msg = res.data.Message;
							if(code == '1') {
								var token = res.data.Result.USERNAME;
								//登录成功，把用户信息保存在sessionStorage中  
								sessionStorage.setItem('access-token', token);
								//跳转到后台主界面  
								_this.$message({
									message: msg,
									type: 'success'
								});
								_this.$router.push({
									path: '/'
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
	}
</script>

<style scoped>
	.login-container {
		width: 242px;
		margin: 0 auto;
	}
	.el-form-item{
		margin-top:10px;
	}
</style>