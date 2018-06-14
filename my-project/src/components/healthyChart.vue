<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>健康信息统计</el-breadcrumb-item>
					<el-breadcrumb-item>小屋健康参数</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="" style="float: right;line-height:47px;">
				<!--<el-button type="success" >打印</el-button>
				<el-button type="success" style="margin-right:10px;" >导出</el-button>-->
			</div>
		</div>
		<div class="el-tool">
			<div class="" style="float: left;line-height:75px;">
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">测试时间</span>
				<el-date-picker v-model="value1" type="date" placeholder="选择日期" size="mini" format="yyyy/M/d" value-format="yyyy/M/d">
				</el-date-picker>
				<el-date-picker v-model="value2" type="date" placeholder="选择日期" size="mini" format="yyyy/M/d" value-format="yyyy/M/d">
				</el-date-picker>
				<!--<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">测试设备</span>
				<el-input placeholder="请输入设备名称" v-model="input1" clearable size="mini">
				</el-input>
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">用户名</span>
				<el-input placeholder="请输入用户名" v-model="input2" clearable size="mini">
				</el-input>-->
			</div>
			<div class="" style="float: right;line-height:75px;">
				<el-button type="success" style="margin-right:20px;">查询</el-button>
			</div>
		</div>
		<div class="el-box">
			<div class="but_box">
				<button v-for="(names,index) in info" @click="handleClick1(index)" :id="'but'+index">{{names.name}}</button>
			</div>
			<div class="health_box">
				<div class="img_box">
					<ul>
						<li v-for="(names,index) in info[id].value" title="点击查看理疗方案" @click="handleClick2(index)" :id="'li'+index">
							<div :id="'div'+index" style="width:180px;height:35px;background-color: #12CE66;float: left;"></div>
							<p style="display:block;height:35px;float:left;margin-left:20px;">{{names.name}}%</p><span style="display:block;height:35px;float:left;width:51px;background-image: url(../../static/image/health_bj3.png);background-position: center;background-repeat: no-repeat;display:none;margin-left:10px;"></span></li>
					</ul>
				</div>
				<div class="info_box">
					<ul>
						<li>
							<span class="phy_info" style="font-weight: bold;color: #000000;">2017年统计数据显示：</span>
						</li>
						<li v-for="(names,index) in info[id].value">
							<span class="phy_info">{{names.value}}</span>
						</li>
					</ul>
				</div>
				<div class="plan_box" style="display: none;">
					<button style="position: absolute;top:0px;right:43px;width:40px;height:40px;border:none;background-color: transparent;cursor: pointer;" @click="handleClick3()"></button>
					<div class="plan_info_box">
						<div class="step_box" style="float: left;">
							<ul>
								<li v-for="(steps,index) in info[id].value[num].plan" :id="'step'+index">{{steps.step}}</li>
							</ul>
						</div>
						<div class="solve_box" style="float: left;">
							<ul>
								<li v-for="(solves,index) in info[id].value[num].plan" :id="'solve'+index">{{solves.solve}}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'personalManagement',
		data() {
			return {
				id: 0,
				num: 0,
				value1: '',
				value2: '',
				info: [{
						name: '0-14岁',
						value: [{
								name: '27',
								value: '心脏区域发病率为27%',
								plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '35',
								value: '肺、肝、肾、膝盖等部位发病率为35%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '44',
								value: '头、生殖器等部位发病率为44%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '55',
								value: '腿、脚等区域发病率为55%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '68',
								value: '心脏区域发病率为68%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '73',
								value: '肺、肝、肾、膝盖等部位发病率为73%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '81',
								value: '头、生殖器等部位发病率为81%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '92',
								value: '腿、脚等区域发病率为92%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							}
						]
					},
					{
						name: '15-30岁',
						value: [{
								name: '91',
								value: '心脏区域发病率为91%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
						},
							{
								name: '85',
								value: '肺、肝、肾、膝盖等部位发病率为85%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '73',
								value: '头、生殖器等部位发病率为73%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '65',
								value: '腿、脚等区域发病率为65%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '56',
								value: '心脏区域发病率为56%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '42',
								value: '肺、肝、肾、膝盖等部位发病率为42%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '33',
								value: '头、生殖器等部位发病率为33%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '22',
								value: '腿、脚等区域发病率为22%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							}
						]
					},
					{
						name: '31-60岁',
						value: [{
								name: '55',
								value: '心脏区域发病率为55%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
						},
							{
								name: '63',
								value: '肺、肝、肾、膝盖等部位发病率为63%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '77',
								value: '头、生殖器等部位发病率为77%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '88',
								value: '腿、脚等区域发病率为88%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '93',
								value: '心脏区域发病率为93%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '42',
								value: '肺、肝、肾、膝盖等部位发病率为42%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '35',
								value: '头、生殖器等部位发病率为35%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '23',
								value: '腿、脚等区域发病率为23%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							}
						]
					},
					{
						name: '60岁以上',
						value: [{
								name: '25',
								value: '心脏区域发病率为25%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
						},
							{
								name: '81',
								value: '肺、肝、肾、膝盖等部位发病率为81%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '62',
								value: '头、生殖器等部位发病率为62%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '53',
								value: '腿、脚等区域发病率为53%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '48',
								value: '心脏区域发病率为48%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '33',
								value: '肺、肝、肾、膝盖等部位发病率为33%',
										plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '12',
								value: '头、生殖器等部位发病率为12%',
								plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							},
							{
								name: '72',
								value: '腿、脚等区域发病率为72%',
								plan: [{
									step: '脉诊仪检测',
									solve: 'KONO脉诊仪对人体进行全身脏器负担检测，得到电子医生诊断报告;'
								}, {
									step: '经颅磁治疗仪',
									solve: '经颅磁治疗仪进行全身放松治疗;'
								}, {
									step: '脊柱梳理',
									solve: '脊柱梳理针对病灶进行全身放松;'
								}, {
									step: '可穿戴磁疗',
									solve: '可穿戴磁疗全天候针对病灶进行理疗;'
								}, {
									step: 'kono保健品辅助理疗',
									solve: 'KONO保健品辅助理疗，更快的达到理疗效果;'
								}]
							}
						]
					}
				]
			}
		},
		mounted() {
			this.getColor();
		},
		methods: {
			getColor() {
				$(".img_box li").each(function() {
					var name = parseFloat($(this).text());
					if(name <= 20) {
						$(this).css("color", "#21f84a");
						$(this).children("div").css("background-color", "#AAE6B7");
					} else if(name > 20 && name <= 40) {
						$(this).css("color", "#56b23a");
						$(this).children("div").css("background-color", "#86ECA9");
					} else if(name > 40 && name <= 60) {
						$(this).css("color", "#3ba5f6");
						$(this).children("div").css("background-color", "#98D6EF");
					} else if(name > 60 && name <= 80) {
						$(this).css("color", "#f8fd78");
						$(this).children("div").css("background-color", "#E1F69E");
					} else if(name > 80) {
						$(this).css("color", "#ed5c5c");
						$(this).children("div").css("background-color", "#E08D81");
					}
				});
			},
			handleClick1(index) {
				this.id = index;
				$("#but" + index).css({
					"background-color": "#41749C",
					"color": "#FFFFFF"
				});
				$("#but" + index).siblings().css({
					"background-color": "#FFFFFF",
					"color": "#595959"
				});
				this.$nextTick(function() {
					this.getColor();
				})
			},
			handleClick2(index) {
				this.num = index;
				$("#li" + index).children("span").show(1000);
				$("#li" + index).siblings().children("span").hide();
				this.$nextTick(function() {
				$(".plan_box").hide();
				$(".solve_box").hide();
				$(".info_box").hide();
				$(".plan_box").show(1000);
				$(".solve_box").show(2000);
				})
			},
			handleClick3() {
				$(".plan_box").hide();
				$(".solve_box").hide();
				$(".info_box").show(1000);
				$("#li" + this.num).children("span").hide();
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
	
	.el-box {
		margin: 12px 12px 0px 12px;
		width: auto;
		background-image: url(../../static/image/health_bj12.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		margin-bottom: 10px;
		overflow: hidden;
	}
	
	.but_box {
		padding-left: 10px;
	}
	
	.but_box button {
		margin-left: 6px;
		margin-top: 20px;
		cursor: pointer;
		border: 1px solid #41749C;
		padding-left: 5px;
		padding-right: 5px;
		height: 25px;
		background-color: #FFFFFF;
		color: #595959;
	}
	
	#but0 {
		background-color: #41749C;
		color: #FFFFFF;
	}
	
	.health_box {
		width: 900px;
		margin: 60px auto 0 auto;
		position: relative;
		height: 500px;
		overflow: hidden;
	}
	
	.img_box {
		float: left;
		position: absolute;
		width: 410px;
		background-image: url(../../static/image/health_bj1.png);
		background-position: center left;
		background-repeat: no-repeat;
		margin-top: 20px;
	}
	
	.img_box ul {
		margin-left: 80px;
	}
	
	.img_box ul li {
		margin-top: 5px;
		height: 35px;
		line-height: 35px;
		font-size: 16px;
		color: #12CE66;
		font-weight: bold;
		cursor: pointer;
		width: 300px;
	}
	
	.img_box ul li:hover {
		opacity: 0.8;
	}
	
	#div0 {
		background-image: url(../../static/image/health_bj4.png);
		background-position: center right;
		background-repeat: no-repeat;
	}
	
	#div1 {
		background-image: url(../../static/image/health_bj5.png);
		background-position: center right;
		background-repeat: no-repeat;
	}
	
	#div2 {
		background-image: url(../../static/image/health_bj6.png);
		background-position: center right;
		background-repeat: no-repeat;
	}
	
	#div3 {
		background-image: url(../../static/image/health_bj7.png);
		background-position: center right;
		background-repeat: no-repeat;
	}
	
	#div4 {
		background-image: url(../../static/image/health_bj8.png);
		background-position: center right;
		background-repeat: no-repeat;
	}
	
	#div5 {
		background-image: url(../../static/image/health_bj9.png);
		background-position: center right;
		background-repeat: no-repeat;
	}
	
	#div6 {
		background-image: url(../../static/image/health_bj10.png);
		background-position: center right;
		background-repeat: no-repeat;
	}
	
	#div7 {
		background-image: url(../../static/image/health_bj11.png);
		background-position: center right;
		background-repeat: no-repeat;
	}
	
	.info_box {
		float: right;
		position: absolute;
		left: 410px;
		width: 60%;
		top: 20px;
	}
	
	.info_box ul li {
		line-height: 35px;
		font-size: 14px;
		color: #1C1C1C;;
		border-bottom: 1px solid #F2F2F2;
		margin-right: 10px;
		overflow: hidden;
		white-space: nowrap;
	}
	
	.phy_info {
		display: inline-block;
		padding-left: 4px;
	}
	
	.plan_box {
		float: right;
		position: absolute;
		left: 410px;
		width: 490px;
		background-image: url(../../static/image/health_bj2.png);
		background-position: center right;
		background-repeat: no-repeat;
		height: 430px;
	}
	
	.plan_info_box {
		width: 360px;
		height: 220px;
		margin-left: 30px;
		margin-top: 66px;
		overflow: hidden;
	}
	
	.step_box {
		width: 152px;
		height: 190px;
		position: relative;
	}
	
	.step_box li {
		width: 24px;
		height: 22px;
		line-height:10px;
		font-size: 8px;
	    color: #FFFFFF;
		overflow: hidden;
	}
	
	#step0 {
		position: absolute;
		top: 46px;
		left: 35px;
	}
	
	#step1 {
		position: absolute;
		top: 74px;
		left: 104px;
	}
	
	#step2 {
		position: absolute;
		top: 100px;
		left: 35px;
	}
	
	#step3 {
		position: absolute;
		top: 128px;
		left: 104px;
	}
	
	#step4 {
		position: absolute;
		top: 154px;
		left: 35px;
	}
	.solve_box{
		margin-top:30px;
		width:190px;
		margin-left:10px;
	}
	.solve_box li{
		padding-top:2px;
		padding-bottom:2px;
		width:190px;
		max-height:36px;
		line-height:18px;
		overflow: hidden;
		border-bottom: 1px solid #F2F2F2;
		font-size: 12px;
		color: #1C1C1C;
	}
	#solve0{
	border-top: 1px solid #F2F2F2;	
	}
</style>