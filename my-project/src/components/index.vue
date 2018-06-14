<template>
	<div class="">
		<div class="el-top">
			<div class="el-top_left">
				<div class="phy_left">
					<h3>●人体健康统计图</h3>
					<img src="../../static/image/index_bj1.png" />
					<ul>
						<li>42%</li>
						<li>84%</li>
						<li>63%</li>
						<li>65%</li>
						<li>41%</li>
						<li>69%</li>
						<li>27%</li>
						<li>23%</li>
					</ul>
				</div>
				<span class="phy_but"></span>
				<div class="phy_right">
					<ul>
						<li>
							<span class="phy_info" style="font-weight: bold;color: #000000;">近年来，人体发病率统计情况如下：</span><span class="phy_date"></span>
						</li>
						<li>
							<span class="phy_info">心脏区域发病率为80%</span><span class="phy_date"></span>
						</li>
						<li>
							<span class="phy_info">肺、肝、肾、膝盖等部位发病率为60%</span><span class="phy_date"></span>
						</li>
						<li>
							<span class="phy_info">头、生殖器等部位发病率为40%</span><span class="phy_date"></span>
						</li>
						<li>
							<span class="phy_info">腿、脚等区域发病率为20%</span><span class="phy_date"></span>
						</li>
						<!--<li>
						<span class="phy_info">开发没事的菲利开始免费收看</span><span class="phy_date">2018/08/08</span>&raquo;
					</li>
					<li>
						<span class="phy_info">技术的开始免费收看</span><span class="phy_date">2018/08/08</span>&raquo;
					</li>-->
					</ul>
				</div>
			</div>
			<div class="el-top_right">
				<el-carousel :interval="5000" arrow="never" height="300px">
					<el-carousel-item v-for="(item,index) in itemImg" :key="index">
						<img :src="item.imgUrl" style="height:300px;" />
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="el-buttom">
			<h3>●用户数量统计图</h3>
			<div id="myChart" :style="{width: '100%', height: '400px'}"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				itemImg: [{
					imgUrl: '../../static/image/index_bj3.png',
				}, {
					imgUrl: '../../static/image/index_bj4.png',
				}]
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
							data: ['2016年', '2017年', '2018年'],
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
			}
		}
	}
</script>

<style scoped>
	.el-top {
		margin: 12px 12px;
		width: auto;
		height: 300px;
		overflow: hidden;
	}
	
	.el-top_left {
		float: left;
		height: 300px;
		background-color: #FFFFFF;
		width: 70%;
		position: relative;
	}
	
	.phy_left {
		width: 40%;
		height: 300px;
		position: absolute;
		left: 0px;
		z-index: 1;
		background-color: #FFFFFF;
	}
	
	.phy_left h3 {
		margin-left: 10px;
		margin-top: 10px;
		font-size: 14px;
		letter-spacing: 2px;
	}
	
	.phy_left img {
		float: left;
		margin-top: 15px;
	}
	
	.phy_left ul {
		float: left;
		margin-top: 20px;
		margin-left: 20px;
	}
	
	.phy_left ul li {
		line-height: 30px;
		font-size: 16px;
		color: #12CE66;
		font-weight: bold;
	}
	
	.phy_but {
		background-image: url(../../static/image/index_bj2.png);
		background-position: center;
		background-repeat: no-repeat;
		width: 43px;
		height: 46px;
		display: block;
		position: absolute;
		top: 0px;
		right: 0px;
		z-index: 1;
	}
	
	.phy_right {
		float: right;
		width: 60%;
		height: 300px;
		position: absolute;
		right: 0px;
	}
	
	.phy_right ul {
		margin-top: 45px;
	}
	
	.phy_right ul li {
		line-height: 35px;
		font-size: 14px;
		color: #909090;
		border-bottom: 1px solid #F2F2F2;
		margin-right: 10px;
		overflow: hidden;
		white-space: nowrap;
	}
	
	.phy_info {
		display: inline-block;
		width: 77%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		float: left;
		padding-left: 4px;
	}
	
	.phy_date {
		display: inline-block;
		width: 20%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		float: left;
	}
	
	.el-top_right {
		float: right;
		height: 300px;
		width: 30%;
		padding-left: 15px;
		box-sizing: border-box;
		background-color: #F0F0F0;
		overflow: hidden;
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		text-align: center;
		background-color: #7AD3FF;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		text-align: center;
		background-color: #A5F2C9;
	}
	
	.el-buttom {
		width: auto;
		height: auto;
		background-color: #FFFFFF;
		margin: 0px 15px 15px 15px;
		border-radius: 3px;
	}
	
	.el-buttom h3 {
		margin-left: 10px;
		padding-top: 10px;
		font-size: 14px;
		letter-spacing: 2px;
	}
	
	#myChart {
		padding-bottom: 10px;
	}
</style>