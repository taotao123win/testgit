<template>
	<div class="">
		<div class="el-top">
			<div class="" style="float: left;">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>信息管理</el-breadcrumb-item>
					<el-breadcrumb-item>个人信息管理</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="" style="float: right;line-height:47px;">
				<el-button type="success" v-on:click="jqprint">打印</el-button>
				<el-button type="success" style="margin-right:10px;" v-on:click="exportExcel">导出</el-button>
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
				<el-button type="success" v-on:click="query" style="margin-right:20px;">查询</el-button>
				<!--<el-button type="success" style="margin-right:20px;" v-on:click="goChart">统计</el-button>-->
			</div>
		</div>
		<div class="el-table">
			<el-table :data="tableData" stripe style="width: 100%" id="el-table__body">
				<el-table-column prop="USERNAME" label="用户名">
				</el-table-column>
				<!--<el-table-column prop="PASSWORD" label="密码">
				</el-table-column>-->
				<el-table-column prop="MOBILEPHONE" label="联系电话">
				</el-table-column>
				<el-table-column prop="ISONLINE" label="是否在线">
				 <template slot-scope="scope">
				 	<img :src="scope.row.ISONLINE==0?'../../static/image/Off_line.png':'../../static/image/On_line.png'" style="display: block;float: left;margin-top:5px;margin-right:5px;"/>
                    <span style="display: block;float: left;">{{scope.row.ISONLINE==0?'离线':'在线'}}</span>
                </template>
				</el-table-column>
				<el-table-column prop="TIME" label="注册时间">
				<template slot-scope="scope">
                 <span>{{scope.row.TIME.split(' ')[0]}}</span>
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
				value2: '',
				input: '',
				currentPage:1,
				pageSize:10,
				totalNumber:0,
				tableData: null,
			}
		},
		mounted() {
				this.getData()
		},
		methods: {
			getData() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				})
                if(this.value1==null){
                	this.value1=''
                }
                if(this.value2==null){
                	this.value2=''
                }
				var _this = this;
				this.$http({
						method: 'get',
						url: '/Back_InfoManage/GetGeneralInfo',
						params: {
							pageSize:this.pageSize,
							page:this.currentPage,
							time:this.value1,
							endTime:this.value2,
							mobilephone:this.input
						}
					})
					.then(function(res) {
                        if(res.data.Result==null){ 
                        _this.totalNumber = 0;                     
                        }
                        else{
                        _this.totalNumber = res.data.Result[0].COUNT;
						_this.tableData = res.data.Result;	
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
			   exportExcel () {
			 var wb = XLSX.utils.table_to_book(document.querySelector('#el-table__body'))
			 var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
			 try {
			FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '个人信息.xlsx')
			 } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
			 return wbout
			},
			handleSizeChange(val) {
				this.pageSize=val;
				this.getData();
				
			},
			handleCurrentChange(val) {
				this.currentPage=val;
				this.getData();
			},
			goChart() {
				this.$router.push({
					path: '/personalManagement/personalChartYear'
				})
			},
			query() {
				this.getData();
			},
			    jqprint(){
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