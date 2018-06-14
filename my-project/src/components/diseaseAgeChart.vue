<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>人工智能统计</el-breadcrumb-item>
					<el-breadcrumb-item>年龄-性别统计</el-breadcrumb-item>
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
				<el-button type="success" v-on:click="query">查询</el-button>
				<el-button type="success" style="margin-right:20px;" v-on:click="goChart">区域统计</el-button>
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
				var data = [
					[ "心脏病", "男性", 10 ],[ "心脏病", "女性", 11 ],[ "心脏病", "女性", 12 ],[ "心脏病", "男性", 13 ],[ "心脏病", "男性", 20 ],[ "心脏病", "女性", 21 ],[ "心脏病", "女性", 22 ],[ "心脏病", "男性", 23 ], 
					[ "高血压", "女性", 20 ],[ "高血压", "女性", 35 ],[ "高血压", "女性", 36 ],[ "高血压", "男性", 45 ],[ "高血压", "男性", 55 ],[ "高血压", "女性", 55 ],[ "高血压", "女性", 53 ],[ "高血压", "男性", 58 ],
					[ "风湿病", "女性", 44 ],[ "风湿病", "女性", 60 ],[ "风湿病", "女性", 65 ],[ "风湿病", "男性", 63 ],[ "风湿病", "男性", 68 ],[ "风湿病", "女性", 75 ],[ "风湿病", "女性", 85 ],[ "风湿病", "男性", 56 ],
					[ "胃溃疡", "男性", 77 ],[ "胃溃疡", "女性", 86 ],[ "胃溃疡", "女性", 71 ],[ "胃溃疡", "男性", 36 ],[ "胃溃疡", "男性", 25 ],[ "胃溃疡", "女性", 30 ],[ "胃溃疡", "女性", 70 ],[ "胃溃疡", "男性", 78],
					[ "中风", "男性", 50 ], [ "中风", "女性", 20 ],[ "中风", "女性", 44 ],[ "中风", "男性", 85 ],[ "中风", "男性", 10 ],[ "中风", "女性", 30 ],[ "中风", "女性", 20 ],[ "中风", "男性", 18 ],
					[ "肺结核", "女性", 57 ], [ "肺结核", "女性", 55 ],[ "肺结核", "女性", 44 ],[ "肺结核", "男性", 22 ],[ "肺结核", "男性", 42 ],[ "肺结核", "女性", 78 ],[ "肺结核", "女性", 55 ],[ "肺结核", "男性", 89 ],
					[ "支气管炎", "女性", 70 ], [ "支气管炎", "女性", 56 ],[ "支气管炎", "女性", 6],[ "支气管炎", "男性", 47 ],[ "支气管炎", "男性", 44 ],[ "支气管炎", "女性", 77 ],[ "支气管炎", "女性", 70 ],[ "支气管炎", "男性", 88 ],
					[ "痢疾", "男性", 80 ],[ "痢疾", "女性", 20],[ "痢疾", "女性", 50 ],[ "痢疾", "男性", 80 ],[ "痢疾", "男性", 44 ],[ "痢疾", "女性", 44 ],[ "痢疾", "女性", 58 ],[ "痢疾", "男性", 25 ]
				]
				var schema = [{
						name: '疾病类型',
						index: 0
					},
					{
						name: '性别',
						index: 1
					},
					{
						name: '年龄',
						index: 2
					}
				];
				var fieldIndices = schema.reduce(function(obj, item) {
					obj[item.name] = item.index;
					return obj;
				}, {});
				var config = {
					xAxis3D: '疾病类型',
					yAxis3D: '性别',
					zAxis3D: '年龄',
				};
				myChart.setOption({
					tooltip: {},
					visualMap: [{
						top: 10,
						left: 10,
						calculable: true,
						min: 0,
                        max: 100,
						dimension: config.zAxis3D,
						inRange: {
							color: ['#1710c0', '#0b9df0', '#00fea8', '#00ff0d', '#f5f811', '#f09a09', '#fe0300']
						},
						textStyle: {
							color: '#fff'
						}
					}, {
						bottom: 10,
						left: 10,
						calculable: true,
						min: 0,
                        max: 100,
						dimension: config.zAxis3D,
						inRange: {
							symbolSize: [10, 40]
						},
						textStyle: {
							color: '#fff'
						}
					}],
					xAxis3D: {
						name: config.xAxis3D,
						type: 'category',
						'axisLabel': {
                          'interval': 0
                      },
					},
					yAxis3D: {
						name: config.yAxis3D,
						type: 'category'
					},
					zAxis3D: {
						name: config.zAxis3D,
						type: 'value'
					},
					grid3D: {
						axisLine: {
							lineStyle: {
								color: '#fff'
							}
						},
						axisPointer: {
							lineStyle: {
								color: '#ffbd67'
							}
						},
						viewControl: {
							autoRotate: true,
							autoRotateSpeed: 3,
							projection: 'orthographic'
						}
					},
					series: [{
						type: 'scatter3D',
						name: '信息：',
						dimensions: [
							config.xAxis3D,
							config.yAxis3D,
							config.zAxis3D,
						],
						data: data.map(function(item) {
							return [
								item[fieldIndices[config.xAxis3D]],
								item[fieldIndices[config.yAxis3D]],
								item[fieldIndices[config.zAxis3D]],
							];
						}),
						symbolSize: 12,
						itemStyle: {
							borderWidth: 1,
							borderColor: 'rgba(255,255,255,0.8)'
						},
						emphasis: {
							itemStyle: {
								color: '#fff'
							}
						}
					}]
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
					path: '/diseaseChart/diseaseRegionChart'
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
		background-color: #394056;
		padding-bottom: 20px;
	}
</style>