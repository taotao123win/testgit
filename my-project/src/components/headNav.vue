<template>
	<div class="headNav">
		<div style="float: left;">
			<img src="../../static/image/logo.png" />
			<span class="title">智能健康管理平台</span>
		</div>
		<div style="float: right;">
		<img src="../../static/image/admin_bj1.png" />
		<span class="admin">Hi,{{adminText}}</span>
		<img src="../../static/image/admin_bj2.png" />
		<button class="quit" @click="quit"></button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'headNav',
		data() {
			return {
				
			}
		},
    computed: {
    adminText() {
      let token = window.sessionStorage.getItem('access-token');
      return token;
    }
  },
  methods: {
      quit() {
      	var _this = this;
        this.$confirm('此操作将退出系统, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function() {
          _this.$message({
            type: 'success',
            message: '退出成功!'
          });
          _this.$router.push({
					path: '/login'
				});
        }).catch(function(){
          _this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        })
      }
    }
	}
</script>

<style>
	.el-header{
    background-color: #41749C;
    height: 62px !important;
    padding:0;
    border-bottom: 1px solid #FFFFFF;
  }
	img {
		display: block;
		line-height: 60px;
		float: left;
	}
	
	.title {
		display: block;
		line-height: 60px;
		float: left;
		font-size: 16px;
		margin-left: 10px;
		color: #FFFFFF;
		letter-spacing: 2px;
	}
	.admin{
		display: block;
		line-height: 60px;
		float: left;
		font-size: 16px;
		margin-left: 10px;
		margin-right: 10px;
		color: #FFFFFF;
	}
	.quit{
		display: block;
		float: left;
		width:20px;
		height: 60px;
        background-image: url(../../static/image/admin_bj3.png);
		background-repeat: no-repeat;
		cursor: pointer;
		border: none;
		margin-left: 20px;
		margin-right: 20px;
	}
	.quit:active{
		opacity: 0.5;
	}.quit:focus{
		outline: 0;
	}
</style>