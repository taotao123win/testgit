<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>人工智能统计</el-breadcrumb-item>
					<el-breadcrumb-item>区域统计</el-breadcrumb-item>
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
				<el-button type="success" style="margin-right:20px;" v-on:click="goChart">年龄-性别统计</el-button>
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
					[ "心脏病", "北京", 100 ],[ "心脏病", "南京", 110 ],[ "心脏病", "青岛", 120 ],[ "心脏病", "广州", 130 ],[ "心脏病", "上海", 200 ],[ "心脏病", "武汉", 210 ],[ "心脏病", "重庆", 202 ],[ "心脏病", "拉萨", 230 ], 
					[ "高血压", "南京", 200 ],[ "高血压", "南京", 350 ],[ "高血压", "青岛", 360 ],[ "高血压", "广州", 450 ],[ "高血压", "上海", 550 ],[ "高血压", "武汉", 550 ],[ "高血压", "重庆", 530 ],[ "高血压", "拉萨", 580 ],
					[ "风湿病", "青岛", 440 ],[ "风湿病", "南京", 600 ],[ "风湿病", "青岛", 650 ],[ "风湿病", "广州", 630 ],[ "风湿病", "上海", 680 ],[ "风湿病", "武汉", 750 ],[ "风湿病", "重庆", 850 ],[ "风湿病", "拉萨", 560 ],
					[ "胃溃疡", "广州", 770 ],[ "胃溃疡", "南京", 860 ],[ "胃溃疡", "青岛", 710 ],[ "胃溃疡", "广州", 360 ],[ "胃溃疡", "上海", 250 ],[ "胃溃疡", "武汉", 300 ],[ "胃溃疡", "重庆", 700 ],[ "胃溃疡", "拉萨", 780],
					[ "中风", "上海", 500 ], [ "中风", "南京", 200 ],[ "中风", "青岛", 440 ],[ "中风", "广州", 850 ],[ "中风", "上海", 100 ],[ "中风", "武汉", 300 ],[ "中风", "重庆", 200 ],[ "中风", "拉萨", 180 ],
					[ "肺结核", "武汉", 570 ], [ "肺结核", "南京", 550 ],[ "肺结核", "青岛", 440 ],[ "肺结核", "广州", 220 ],[ "肺结核", "上海", 420 ],[ "肺结核", "武汉", 780 ],[ "肺结核", "重庆", 550 ],[ "肺结核", "拉萨", 890 ],
					[ "支气管炎", "重庆", 700 ], [ "支气管炎", "南京", 560],[ "支气管炎", "青岛", 600],[ "支气管炎", "广州", 470 ],[ "支气管炎", "上海", 440 ],[ "支气管炎", "武汉", 770 ],[ "支气管炎", "重庆", 700 ],[ "支气管炎", "拉萨", 880 ],
					[ "痢疾", "拉萨", 800 ],[ "痢疾", "南京", 200],[ "痢疾", "青岛", 500 ],[ "痢疾", "广州", 800 ],[ "痢疾", "上海", 440 ],[ "痢疾", "武汉", 440 ],[ "痢疾", "重庆", 580 ],[ "痢疾", "拉萨", 250 ]
				]
				var schema = [{
						name: '疾病类型',
						index: 0
					},
					{
						name: '地区',
						index: 1
					},
					{
						name: '人数',
						index: 2
					}
				];
				var fieldIndices = schema.reduce(function(obj, item) {
					obj[item.name] = item.index;
					return obj;
				}, {});
				var config = {
					xAxis3D: '疾病类型',
					yAxis3D: '地区',
					zAxis3D: '人数',
				};
				myChart.setOption({
					tooltip: {},
					visualMap: [{
						top: 10,
						left: 10,
						calculable: true,
						dimension: config.zAxis3D,
						min: 0,
                        max: 1000,
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
						dimension: config.zAxis3D,
						min: 0,
                        max: 1000,
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
						type: 'category',
						'axisLabel': {
                        'interval': 0
                    },
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
					path: '/diseaseChart/diseaseAgeChart'
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