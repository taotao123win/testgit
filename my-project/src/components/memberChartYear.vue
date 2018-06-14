<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>信息管理</el-breadcrumb-item>
					<el-breadcrumb-item>会员信息管理</el-breadcrumb-item>
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
				<el-button type="success" style="margin-right:20px;" v-on:click="goChart">月统计</el-button>
			</div>
		</div>
		<div class="el-chart">
			<div id="myChart" :style="{width: '100%', height: '560px'}"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'memberChart',
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
						url: '/Back_InfoManage/MemberRegisterCountYear',
						params: {
							startTime: this.value1,
							endTime: this.value2,
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
						// 绘制图表
						myChart.setOption({
							tooltip: {},
							xAxis: {
								name: "年份",
								type: 'category',
								data: xAxisDate
							},
							yAxis: {
								name: "会员人数",
								type: 'value'
							},
							series: [{
								name: '会员人数',
								type: 'bar',
								barWidth: '50%',
								data: yAxisDate,
								itemStyle: {
									normal: {
										color: function(params) {
											// build a color map as your need.
											var colorList = [
												'#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
												'#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
												'#D7504B', '#C6E579'
											];
											return colorList[params.dataIndex]
										}
									}
								}
							}]
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
        this.$router.push({ path: '/memberManagement/memberChartMonth' })
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
		height: 560px;
		margin: 0px 12px 12px 12px;
		width: auto;
		background-color: #FFFFFF;
	}
</style>