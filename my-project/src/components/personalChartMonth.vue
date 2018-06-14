<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>信息管理</el-breadcrumb-item>
					<el-breadcrumb-item>用户信息统计</el-breadcrumb-item>
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
				var colors = ['#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B'];
				var all_data = {
					"dataHY": [
						[ 0.2, 0.3, 0.4, 0.5, 0.6 ],
						[ 0.4, 0.5, 0.6, 0.7, 0.8 ],
						[ 0.6, 1, 1.1, 1.2, 1.3 ]
					],
					"dataYH": [
						[ 0.3, 0.4, 0.5, 0.6, 0.7 ],
						[ 0.5, 0.6, 0.7, 0.8,0.9 ],
						[ 1, 1.1, 1.2, 1.3,1.4 ]
					],

					"dataZX": [
						[ 0.3, 0.5, 0.6, 0.7, 0.9 ],
						[ 0.5, 0.6, 0.9, 1.2,1.5 ],
						[ 1, 1.3, 1.7, 1.9,2 ]
					],
					"dataBX": [
						[{ name: '次卡', value: [0.5] }, { name: '月卡', value: [0.4] }, { name: '半年卡', value: [0.5] }, { name: '年卡', value: [0.3] } ],
						[{ name: '次卡', value: [0.7] }, { name: '月卡', value: [0.6] }, { name: '半年卡', value: [0.7] }, { name: '年卡', value: [0.5] } ],
						[{ name: '次卡', value: [0.9] }, { name: '月卡', value: [0.8] }, { name: '半年卡', value: [0.9] }, { name: '年卡', value: [0.7] } ]
					]
				}
				var options = [];
				for(var i = 0; i < all_data.dataHY.length; i++) {
					var series = [];
					series.push({
						data: all_data.dataHY[i]
					}, {
						data: all_data.dataYH[i]
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
							data: ['3月', '4月', '5月'],
						},
						tooltip: {},
						color: colors,
						legend: {
							data: ['会员人数(万)', '用户人数(万)', '消费金额(万)', '次卡', '月卡', '半年卡', '年卡']
						},
						calculable: true,
						grid: {
							top: 80,
							bottom: 80
						},
						xAxis: [{
							name: '地区',
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
								name: '人数(万)',
								min: 0,
								max: 2,
								position: 'left',
							},
							{
								type: 'value',
								name: '消费金额(万)',
								min: 0,
								max: 2,
								position: 'left',
								offset: 60,
							}
						],
						series: [{
								name: '会员人数(万)',
								itemStyle: {
									normal: {
										color: '#9BCA63'
									}
								},
								barWidth: 20, //柱子宽度
								barGap: 1, //柱子之间间距
								type: 'bar'
							},
							{
								name: '用户人数(万)',
								itemStyle: {
									normal: {
										color: '#FAD860'
									}
								},
								barWidth: 20, //柱子宽度
								barGap: 1, //柱子之间间距
								type: 'bar'
							},
							{
								name: '消费金额(万)',
								type: 'line',
								yAxisIndex: 1
							},
							{
								name: '会员数量(万)',
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
					path: '/personalChart/personalChartYear'
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
	
	#myChart {
		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>