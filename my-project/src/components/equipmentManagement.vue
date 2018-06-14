<template>
   <div class="">
   	<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>设备管理</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="" style="float: right;line-height:47px;">
				<!--<el-button type="success">打印</el-button>
				<el-button type="success" style="margin-right:10px;">导出</el-button>-->
			</div>
		</div>
		<div class="el-tool">
			<div class="" style="float: left;line-height:75px;">
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">设备名称</span>
				<el-select v-model="value" clearable placeholder="">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="" style="float: right;line-height:75px;">
				<el-button type="success" style="margin-right:20px;" v-on:click="query">查询</el-button>
			</div>
		</div>
		<div class="el-table">
		<div class="equipment_1" style="display: block;">
		<img src="../../static/image/equipment_1.jpg"/>	
		</div>
		<div class="equipment_2" style="display: none;">
		<img src="../../static/image/equipment_2.jpg"/>	
		</div>	
		<div class="equipment_3" style="display: none;">
		<img src="../../static/image/equipment_3.jpg"/>	
		</div>	
		<div class="equipment_4" style="display: none;">
		<img src="../../static/image/equipment_4.jpg"/>	
		</div>	
		</div>
   </div>
</template>

<script>
export default {
  name: 'equipmentManagement',
  data() {
			return {
				options: [{
				value:'1',
				label:'脊柱梳理仪'
				},
				{
				value:'2',
				label:'经颅磁治疗仪'
				},
				{
				value:'3',
				label:'美颜塑体治疗仪'
				},
				{
				value:'4',
				label:'生物物理理疗仪'
				}
				],
				value: '1',
			}
		},
		mounted() {
				
		},
		methods: {
	     query() {
			$(".equipment_"+this.value).css("display","block");
			$(".equipment_"+this.value).siblings().css("display","none");
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
	
	.el-tool {
		height: 75px;
		margin: 12px 12px;
		width: auto;
		background-color: #FFFFFF;
		overflow: hidden;
	}
		
	.el-table {
		margin: 12px 12px 0px 12px;
		width: auto;
		background-color: #FFFFFF;
	}
	
</style>