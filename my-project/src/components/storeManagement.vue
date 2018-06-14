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
				<el-button type="success" plain v-on:click="goMap">电子地图</el-button>
				<el-button type="success" v-on:click="jqprint">打印</el-button>
				<el-button type="success" style="margin-right:10px;" v-on:click="exportExcel">导出</el-button>
			</div>
		</div>
		<div class="el-tool">
			<div class="" style="float: left;line-height:75px;">
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">注册时间</span>
				<el-date-picker v-model="value1" type="date" placeholder="选择日期" size="mini" format="yyyy/M/d" value-format="yyyy/M/d">
				</el-date-picker>
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">小屋编号</span>
				<el-input placeholder="请输入编号" v-model="input1" clearable size="mini">
				</el-input>
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">小屋地址</span>
				<el-input placeholder="请输入地址" v-model="input2" clearable size="mini">
				</el-input>
			</div>
			<div class="" style="float: right;line-height:75px;">
				<el-button type="success" v-on:click="query">查询</el-button>
				<el-button type="success" style="margin-right:20px;" v-on:click="goChart">统计</el-button>
			</div>
		</div>
		<div class="el-table">
			<el-table :data="tableData" stripe style="width: 100%" id="el-table__body">
				<el-table-column prop="HOUSENO" label="小屋编号">
				</el-table-column>
				<el-table-column prop="REGISTERTIME" label="注册时间">
					<template slot-scope="scope">
						<span>{{scope.row.REGISTERTIME.split(' ')[0]}}</span>
					</template>
				</el-table-column>
				<el-table-column prop="HOUSERADDRESS" label="地址">
				</el-table-column>
				<el-table-column prop="MOBILEPHONE" label="联系电话">
				</el-table-column>
				<el-table-column prop="STATUS" label="营业状态">
					<template slot-scope="scope">
						<img :src="scope.row.STATUS==0?'../../static/image/On_line.png':(scope.row.STATUS==1?'../../static/image/Sleep_line.png':'../../static/image/Off_line.png')" style="display: block;float: left;margin-top:5px;margin-right:5px;" />
						<span style="display: block;float: left;">{{scope.row.STATUS==0?'正常':(scope.row.STATUS==1?'休息':'关闭')}}</span>
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="电子地图">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small"><img src="../../static/image/map_nav.png" /></el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="block" style="text-align: center;margin:0px 12px 12px 12px;width: auto;background-color: #FFFFFF; overflow: hidden;">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10,20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalNumber">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import FileSaver from 'file-saver';
	import XLSX from 'xlsx';
	export default {
		name: 'personalManagement',
		data() {
			return {
				value1: '',
				input1: '',
				input2: '',
				currentPage: 1,
				pageSize: 10,
				totalNumber: 0,
				tableData: null,
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			handleClick(index, row) {
				this.$router.push({
					name: 'storeManagementMap',
					params: {
						id: index
					}
				})
			},
			getData() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				})
				if(this.value1 == null) {
					this.value1 = ''
				}
				var _this = this;
				this.$http({
						method: 'get',
						url: '/Back_HouseManage/ShowHouseInfo',
						params: {
							pageSize: this.pageSize,
							page: this.currentPage,
							RegisterTime: this.value1,
							HouseNo: this.input1,
							Address: this.input2
						}
					})
					.then(function(res) {
						if(res.data.Result == null) {
							_this.totalNumber = 0;
						} else {
							_this.totalNumber = res.data.Result[0].COUNT;
							_this.tableData = res.data.Result;
						}
						loading.close();
					})
					.catch(function(err) {
						console.log(err);
					});
			},
			exportExcel() {
				var wb = XLSX.utils.table_to_book(document.querySelector('#el-table__body'))
				var wbout = XLSX.write(wb, {
					bookType: 'xlsx',
					bookSST: true,
					type: 'array'
				})
				try {
					FileSaver.saveAs(new Blob([wbout], {
						type: 'application/octet-stream'
					}), '分店管理.xlsx')
				} catch(e) {
					if(typeof console !== 'undefined') console.log(e, wbout)
				}
				return wbout
			},
			handleSizeChange(val) {
				this.pageSize = val;
				this.getData();

			},
			handleCurrentChange(val) {
				this.currentPage = val;
				this.getData();
			},
			query() {
				this.getData();
			},
			goChart() {
				this.$router.push({
					path: '/storeManagement/storeChartYear'
				})
			},
			goMap() {
				this.$router.push({
					path: '/storeManagement/storeManagementMap'
				})
			},
			jqprint() {
				$("#el-table__body").jqprint();
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
	
	.el-pagination {
		padding: 16px 5px !important;
	}
</style>