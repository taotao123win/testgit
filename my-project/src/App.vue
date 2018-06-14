<template>
	<div id="app">
	  <router-view></router-view>
	</div>
</template>
<script>
	export default {
		name: 'App'
	}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	html,
	body {
		height: 100%;
	}
	
	ul,
	li {
		list-style-type: none;
	}
		
	#app {
		height: 100%;
	}
	.el-message-box__wrapper{
		z-index:100000 !important;
	}
</style>