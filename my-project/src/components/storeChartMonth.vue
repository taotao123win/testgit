<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>理疗小屋分店管理</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="" style="float: right;line-height:47px;">
				<!--<el-button type="success">打印</el-button>
				<el-button type="success" style="margin-right:10px;">导出</el-button>-->
			</div>
		</div>
		<div class="el-tool">
			<div class="" style="float: left;line-height:75px;">
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">注册时间</span>
				<el-date-picker v-model="value1" type="month" placeholder="选择日期" size="mini" format="yyyy/M" value-format="yyyy/M" @change="compareTime">
				</el-date-picker>
				<el-date-picker v-model="value2" type="month" placeholder="选择日期" size="mini" format="yyyy/M" value-format="yyyy/M" @change="compareTime">
				</el-date-picker>
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">注册电话</span>
				<el-input placeholder="请输入手机号" v-model="input" clearable size="mini">
				</el-input>
			</div>
			<div class="" style="float: right;line-height:75px;">
				<el-button type="success" v-on:click="query">查询</el-button>
				<el-button type="success" style="margin-right:20px;" v-on:click="goChart">年统计</el-button>
			</div>
		</div>
		<div class="el-chart">
			<div id="myChart" :style="{width: '100%', height: '560px'}"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'personalChart',
		data() {
			return {
				value1: '',
				value2: '',
				input: '',
			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				})
				if(this.value1 == null) {
					this.value1 = ''
				}
				if(this.value2 == null) {
					this.value2 = ''
				}
				//				var _this = this;
				this.$http({
						method: 'get',
						url: '/Back_HouseManage/GetYearCount',
						params: {
							startYear: this.value1,
							endYear: this.value2,
						}
					})
					.then(function(res) {
						var xAxisDate = [];
						var yAxisDate = [];
						if(res.data.Result == null) {
							xAxisDate = [];
							yAxisDate = [];
						} else {
							for(var i = 0; i < res.data.Result.length; i++) {
								xAxisDate.push(res.data.Result[i].year);
								yAxisDate.push(res.data.Result[i].count);
							}
						}
						var colors = ['#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B', '#FE8463'];
						var all_data = {
							"dataXX": [
								[10, 12, 11, 9, 8],
								[5, 2, 3, 11, 2],
								[5, 2, 1, 6, 2]
							],
							"dataGB": [
								[10, 12, 11, 9, 8],
								[5, 2, 3, 11, 2],
								[5, 2, 1, 6, 2]
							],

							"dataYY": [
								[50, 60, 57, 50, 82],
								[55, 33, 77, 77, 22],
								[50, 60, 57, 80, 82]
							],

							"dataZX": [
								[2.0, 4.9, 7.0, 3.2, 5.6, 6.7],
								[2.0, 2.2, 3.3, 4.5, 6.3, 1.2],
								[2.0, 2.2, 3.3, 4.5, 5.6, 6.7]
							],
							"dataBX": [
								[{ name: '黄岛区', value: [50] }, { name: '市北区', value: [60] }, { name: '市南区', value: [70] }, { name: '崂山区', value: [60] }, { name: '李沧区', value: [70] } ],
								[{ name: '黄岛区', value: [30] }, { name: '市北区', value: [40] }, { name: '市南区', value: [20] }, { name: '崂山区', value: [60] }, { name: '李沧区', value: [80] } ],
							    [{ name: '黄岛区', value: [50] }, { name: '市北区', value: [60] }, { name: '市南区', value: [70] }, { name: '崂山区', value: [60] }, { name: '李沧区', value: [70] } ]
							]
						}
						var options = [];
						for(var i = 0; i < all_data.dataXX.length; i++) {
							var series = [];
							series.push({
								data: all_data.dataXX[i]
							}, {
								data: all_data.dataGB[i]
							}, {
								data: all_data.dataYY[i]
							}, {
								data: all_data.dataZX[i]
							}, {
								data: all_data.dataBX[i]
							});
							options.push({
								series: series
							});
						}
						myChart.setOption({
							baseOption: {
								timeline: {
									// y: 0,
									axisType: 'category',
									// realtime: false,
									// loop: false,
									autoPlay: true,
									// currentIndex: 2,
									playInterval: 2000,
									// controlStyle: {
									//     position: 'left'
									// },
									data: ['3月','4月', '5月'],
								},
								tooltip: {},
								color: colors,
								legend: {
									data: ['休息', '关闭', '营业', '营业额(百万)', '黄岛区', '市北区', '市南区', '崂山区', '李沧区']
								},
								calculable: true,
								grid: {
									top: 80,
									bottom: 80
								},
								xAxis: [{
									name:'地区',
									'type': 'category',
									'axisLabel': {
										'interval': 0
									},
									'data': [
										'黄岛区', '市北区', '市南区', '崂山区', '李沧区'
									],
									splitLine: {
										show: false
									}
								}],
								yAxis: [{
										type: 'value',
										name: '店数(个)',
										min: 0,
										max: 100,
										position: 'left',
									},
									{
										type: 'value',
										name: '营业额(百万)',
										min: 0,
										max: 10,
										position: 'left',
										offset: 60,
									}
								],
								series: [{
										name: '休息',
										type: 'bar',
										barWidth: 20, //柱子宽度
								        barGap: 1, //柱子之间间距
										itemStyle: {
											normal: {
												color: '#9BCA63'
											}
										}
									},
									{
										name: '关闭',
										type: 'bar',
										barWidth: 20, //柱子宽度
								        barGap: 1, //柱子之间间距
										itemStyle: {
											normal: {
												color: '#FAD860'
											}
										}
									},
									{
										name: '营业',
										type: 'bar',
										barWidth: 20, //柱子宽度
								        barGap: 1, //柱子之间间距
										itemStyle: {
											normal: {
												color: '#F3A43B'
											}
										}
									},
									{
										name: '营业额(百万)',
										type: 'line',
										yAxisIndex: 1
									},
									{
										name: '分店数(个)',
										type: 'pie',
										center: ['85%', '35%'],
										radius: '28%'
									}
								]
							},

							options: options
						});
						window.onresize = function() {
							myChart.resize();
						}
						loading.close();
					})
					.catch(function(err) {
						console.log(err);
					});
			},
			compareTime() {
				if(this.value1 != '' && this.value2 != '' && this.value1 != null && this.value2 != null) {
					var st = this.value1 + "/1";
					var et = this.value2 + "/1";
					var d1 = new Date(st);
					var d2 = new Date(et);
					if(d1 > d2) {
						this.$message({
							message: '开始时间不能大于结束时间',
							type: 'warning'
						});
						this.value2 = ''
					}
					if(st.split('/')[0] != et.split('/')[0]) {
						this.$message({
							message: '请选取同一年内的月份',
							type: 'warning'
						});
						this.value2 = ''
					}
				}
				return false;
			},
			query() {
				this.drawLine();
			},
			goChart() {
				this.$router.push({
					path: '/storeManagement/storeChartYear'
				})
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
	
	.el-chart {
		height: auto;
		margin: 0px 12px 12px 12px;
		width: auto;
		background-color: #FFFFFF;
	}
	#myChart{
		padding-top: 10px;
		padding-bottom:10px;
	}
</style>