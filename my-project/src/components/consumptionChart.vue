<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>人工智能统计</el-breadcrumb-item>
					<el-breadcrumb-item>消费群体统计</el-breadcrumb-item>
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
<!--				<el-button type="success"  v-on:click="goChart">月统计</el-button>-->
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
				var colors = ['#5793f7', '#d14a61', '#7ddf5a', '#fd824c', '#914af1'];
            var all_data={
            	"dataHD":[
            	[1.99, 1.08, 1.69, 1.31, 0.78, 0.85],
				[0.95, 1.81, 0.68, 1.65, 1.79, 0.85]
            	],
			"dataSB" :[
				[1.15, 1.31, 1.56, 1.38, 0.49, 0.89],
				[1.99, 1.8, 1.69, 1.31, 2.78, 2.85]
			],

			"dataSN":[
				[0.95, 1.81, 0.68, 1.65, 1.79, 0.85],
				[2.57, 2.47, 1.75, 2.69, 1.47, 2.17]
			],
			"dataLS":[
				[2.95, 1.81, 0.68, 1.65, 1.79, 2.85],
				[2.57, 2.47, 1.75, 2.69, 1.47, 2.17]
			],
			"dataLC":[
				[0.95, 1.81, 2.68, 1.65, 1.79, 2.85],
				[0.57, 0.47, 2.75, 2.69, 0.47, 2.17]
			],

			"dataZX" :[
				[1.0, 1.9, 1.0, 1.2, 1.6, 1.7],
				[1.0, 1.2, 1.3, 1.5, 1.3, 1.2]
			],
			"dataBX" :[
				[{
						name: '黄岛区',
						value: [50]
					},
					{
						name: '市北区',
						value: [60]
					},
					{
						name: '市南区',
						value: [70]
					},
					{
						name: '崂山区',
						value: [60]
					},
					{
						name: '李沧区',
						value: [70]
					}
				],
				[{
						name: '黄岛区',
						value: [30]
					},
					{
						name: '市北区',
						value: [40]
					},
					{
						name: '市南区',
						value: [20]
					},
					{
						name: '崂山区',
						value: [60]
					},
					{
						name: '李沧区',
						value: [80]
					}
				]
			]
            }
            var options=[];
            for(var i=0;i<all_data.dataHD.length;i++){
            var series=[];	
            series.push({
	          data:all_data.dataHD[i]
            },{
	          data:all_data.dataSB[i]
            },{
	          data:all_data.dataSN[i]
            },{
	          data:all_data.dataLS[i]
            },{
	          data:all_data.dataLC[i]
            },{
	          data:all_data.dataZX[i]
            },{
	          data:all_data.dataBX[i]
            }
            );  
            options.push({series:series});
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
						data: ['2017年', '2018年'],
					},
					tooltip: {},
					color: colors,
					legend: {
						data: ['黄岛区', '市北区', '市南区', '崂山区', '李沧区','消费金额']
					},
					calculable: true,
					grid: {
						top: 80,
						bottom: 80
					},
					xAxis: [{
						name:'年龄',
						'type': 'category',
						'axisLabel': {
							'interval': 0
						},
						'data': [
							'20-30岁', '30-40岁', '40-50岁', '50-60岁', '60-70岁', '70-80岁'
						],
						splitLine: {
							show: false
						}
					}],
					yAxis: [{
							type: 'value',
							name: '人数(万)',
							min: 0,
							max: 3,
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
							name: '黄岛区',
							type: 'bar',
							barWidth: 10, //柱子宽度
							barGap: 1, //柱子之间间距
						},
						{
							name: '市北区',
							type: 'bar',
							barWidth: 10, //柱子宽度
							barGap: 1, //柱子之间间距
						},
						{
							name: '市南区',
							type: 'bar',
							barWidth: 10, //柱子宽度
							barGap: 1, //柱子之间间距
						},
						{
							name: '崂山区',
							type: 'bar',
							barWidth: 10, //柱子宽度
							barGap: 1, //柱子之间间距
						},
						{
							name: '李沧区',
							type: 'bar',
							barWidth: 10, //柱子宽度
							barGap: 1, //柱子之间间距
						},
						{
							name: '消费金额',
							type: 'line',
							yAxisIndex: 1
						},
						{
							name: '人数',
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
	#myChart{
		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>