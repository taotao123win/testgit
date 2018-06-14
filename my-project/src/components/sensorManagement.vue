<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>参数管理</el-breadcrumb-item>
					<el-breadcrumb-item>传感器参数管理</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="" style="float: right;line-height:47px;">
				<el-button type="success">打印</el-button>
				<el-button type="success" style="margin-right:10px;">导出</el-button>
			</div>
		</div>
		<div class="el-tool">
			<div class="" style="float: left;line-height:75px;">
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">注册时间</span>
				<el-date-picker v-model="value1" type="date" placeholder="选择日期" size="mini" format="yyyy/M/d" value-format="yyyy/M/d" @change="compareTime">
				</el-date-picker>
				<el-date-picker v-model="value2" type="date" placeholder="选择日期" size="mini" format="yyyy/M/d" value-format="yyyy/M/d" @change="compareTime">
				</el-date-picker>
				<span style="margin-left:20px;font-size:14px;color:#606266;margin-right:5px;">注册电话</span>
				<el-input placeholder="请输入手机号" v-model="input" clearable size="mini">
				</el-input>
			</div>
			<div class="" style="float: right;line-height:75px;">
				<el-button type="success">查询</el-button>
				<el-button type="success" style="margin-right:20px;" v-on:click="goPersonalChart">统计</el-button>
			</div>
		</div>
		<div class="el-table">
			<el-table :data="tableData" stripe style="width: 100%" id="el-table__body">
				<el-table-column prop="user" label="用户名">
				</el-table-column>
				<el-table-column prop="pass" label="密码">
				</el-table-column>
				<el-table-column prop="phone" label="联系电话">
				</el-table-column>
				<el-table-column prop="id" label="身份证号">
				</el-table-column>
				<el-table-column prop="bank" label="银行卡号">
				</el-table-column>
				<el-table-column prop="date" label="注册时间">
				</el-table-column>
			</el-table>
		</div>
		<div class="block" style="text-align: center;margin:0px 12px 12px 12px;width: auto;background-color: #FFFFFF; overflow: hidden;">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10]" layout="total, sizes, prev, pager, next, jumper" :total="100">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'personalManagement',
		data() {
			return {
				value1: '',
				value2: '',
				input: '',
				currentPage: 1,
				tableData: [{
					user: '张三',
					pass: '123456',
					phone: '18989689856',
					id: '3702841987879879558',
					bank: '322018879666',
					date: '2018/3/14'
				}, {
					user: '张三',
					pass: '123456',
					phone: '18989689856',
					id: '3702841987879879558',
					bank: '322018879666',
					date: '2018/3/14'
				}, {
					user: '张三',
					pass: '123456',
					phone: '18989689856',
					id: '3702841987879879558',
					bank: '322018879666',
					date: '2018/3/14'
				}, {
					user: '张三',
					pass: '123456',
					phone: '18989689856',
					id: '3702841987879879558',
					bank: '322018879666',
					date: '2018/3/14'
				}, {
					user: '张三',
					pass: '123456',
					phone: '18989689856',
					id: '3702841987879879558',
					bank: '322018879666',
					date: '2018/3/14'
				}, {
					user: '张三',
					pass: '123456',
					phone: '18989689856',
					id: '3702841987879879558',
					bank: '322018879666',
					date: '2018/3/14'
				}, {
					user: '张三',
					pass: '123456',
					phone: '18989689856',
					id: '3702841987879879558',
					bank: '322018879666',
					date: '2018/3/14'
				}, {
					user: '张三',
					pass: '123456',
					phone: '18989689856',
					id: '3702841987879879558',
					bank: '322018879666',
					date: '2018/3/14'
				}, {
					user: '张三',
					pass: '123456',
					phone: '18989689856',
					id: '3702841987879879558',
					bank: '322018879666',
					date: '2018/3/14'
				}, {
					user: '张三',
					pass: '123456',
					phone: '18989689856',
					id: '3702841987879879558',
					bank: '322018879666',
					date: '2018/3/14'
				}]
			}
		},
		methods: {
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
			//   exportExcel () {
			// var wb = XLSX.utils.table_to_book(document.querySelector('#el-table__body'))
			// var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
			// try {
			//FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'sheetjs.xlsx')
			// } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
			// return wbout
			//},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			goPersonalChart() {
				this.$router.push({
					path: '/personalManagement/personalChartYear'
				})
			},
			//    jqprint(){
			//	    $("#el-table__body").jqprint();
			//	    }	
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