<template>
	<div class="" style="height:100%;">
		<el-container style="height:100%;">
			<el-header>
				<head-nav></head-nav>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<left-nav></left-nav>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	import HeadNav from './headNav.vue'
	import LeftNav from './leftNav.vue'
	export default {
		components: {
			LeftNav,
			HeadNav
		},
		name: ''
	}
</script>
<style>	
	.el-main {
		background-color: #F0F0F0 !important;
	}
	
	.BMap_bubble_content {
		margin-top: 10px;
	}
	
	.el-date-editor {
		width: 147px !important;
	}
	
	.el-input__inner {
		line-height: 28px !important;
	}
	
	.el-input--mini {
		width: 147px !important;
	}
</style>
