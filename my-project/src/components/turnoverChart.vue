<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>人工智能统计</el-breadcrumb-item>
					<el-breadcrumb-item>营业额统计</el-breadcrumb-item>
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
				<el-date-picker v-model="value1" type="year" placeholder="选择日期" size="mini" format="yyyy" value-format="yyyy" @change="compareTime">
				</el-date-picker>
				<el-date-picker v-model="value2" type="year" placeholder="选择日期" size="mini" format="yyyy" value-format="yyyy" @change="compareTime">
				</el-date-picker>
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">注册电话</span>
				<el-input placeholder="请输入手机号" v-model="input" clearable size="mini">
				</el-input>
			</div>
			<div class="" style="float: right;line-height:75px;">
				<el-button type="success" v-on:click="query" style="margin-right:20px;">查询</el-button>
<!--				<el-button type="success" style="margin-right:20px;" v-on:click="goChart">月统计</el-button>-->
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
				// 绘制图表
				myChart.setOption({
					backgroundColor: '#333',
					title: {
						textStyle: {
							fontWeight: 'normal',
							fontSize: 16,
							color: '#F1F1F3'
						},
						left: '6%'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							lineStyle: {
								color: '#57617B'
							}
						}
					},
					legend: {
						icon: 'rect',
						itemWidth: 14,
						itemHeight: 5,
						itemGap: 13,
						data: ['城阳区', '黄岛区', '市南区'],
						right: '4%',
						textStyle: {
							fontSize: 12,
							color: '#F1F1F3'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						name:'月份',
						type: 'category',
						boundaryGap: false,
						axisLine: {
							lineStyle: {
								color: '#F1F1F3'
							}
						},
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
					}],
					yAxis: [{
						name:'营业额(百万)',
						type: 'value',
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: '#F1F1F3'
							}
						},
						axisLabel: {
							margin: 10,
							textStyle: {
								fontSize: 14
							}
						},
						splitLine: {
							lineStyle: {
								color: '#57617B'
							}
						}
					}],
					series: [{
						name: '城阳区',
						type: 'line',
						smooth: true,
						lineStyle: {
							normal: {
								width: 1
							}
						},
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(137, 189, 27, 0.3)'
								}, {
									offset: 0.8,
									color: 'rgba(137, 189, 27, 0)'
								}], false),
								shadowColor: 'rgba(0, 0, 0, 0.1)',
								shadowBlur: 10
							}
						},
						itemStyle: {
							normal: {
								color: 'rgb(137,189,27)'
							}
						},
						data: [0.3, 0.4, 0.5, 0.6, 0.1, 0.8, 0.6, 0.1, 0.1, 0.4, 0.8, 0.7]
					}, {
						name: '黄岛区',
						type: 'line',
						smooth: true,
						lineStyle: {
							normal: {
								width: 1
							}
						},
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(0, 136, 212, 0.3)'
								}, {
									offset: 0.8,
									color: 'rgba(0, 136, 212, 0)'
								}], false),
								shadowColor: 'rgba(0, 0, 0, 0.1)',
								shadowBlur: 10
							}
						},
						itemStyle: {
							normal: {
								color: 'rgb(0,136,212)'
							}
						},
						data: [0.3, 0.2, 0.3, 0.9, 0.6, 0.6, 0.3, 0.5, 0.8, 0.5, 0.4, 0.9]
					}, {
						name: '市南区',
						type: 'line',
						smooth: true,
						lineStyle: {
							normal: {
								width: 1
							}
						},
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(219, 50, 51, 0.3)'
								}, {
									offset: 0.8,
									color: 'rgba(219, 50, 51, 0)'
								}], false),
								shadowColor: 'rgba(0, 0, 0, 0.1)',
								shadowBlur: 10
							}
						},
						itemStyle: {
							normal: {
								color: 'rgb(219,50,51)'
							}
						},
						data: [1.2, 1.0, 0.5, 1.1, 0.7, 0.5, 0.9, 1.8, 0.7, 0.6, 0.9, 1.0]
					}, ]
				});
				window.onresize = function() {
					myChart.resize();
				}
			},
			compareTime() {
				if(this.value1 != '' && this.value2 != '' && this.value1 != null && this.value2 != null) {
					var st = this.value1
					var et = this.value2
					var d1 = new Date(st);
					var d2 = new Date(et);
					if(d1 > d2) {
						this.$message({
							message: '开始时间不能大于结束时间',
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
					path: '/personalChart/personalChartMonth'
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
		background-color: #333;
	}
</style>