<template>
	<div class="" style="position: relative;">
		<div class="baidumap" id="allmap"></div>
		<div class="" style="position:absolute;top:20px;left:20px;">
			<template>
				<el-select v-model="value" clearable placeholder="请选择分店">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-button type="success" v-on:click="theLocation()">搜索</el-button>
			</template>
		</div>
	</div>
</template>

<script>
	import BMap from 'BMap'
	export default {
		name: 'storeManagementMap',
		data() {
			return {
				options: [],
				value: '',
				data_info: []
			}
		},
		mounted() {
			var id = this.$route.params.id;
			if(id != null) {
				this.mapLocation(id)
			} else {
				this.baiduMap()
			}
		},
		methods: {
			baiduMap() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				})
				var _this = this;
				this.$http({
						method: 'get',
						url: '/Back_HouseManage/GetPotision',
						params: {

						}
					})
					.then(function(res) {
						if(res.data.Result == null) {
							_this.options = [];
							_this.data_info = [];
						} else {
							_this.options = [{
								value: '0',
								label: '全部'
							}];
							for(var i = 0; i < res.data.Result.length; i++) {
								_this.options.push({
									"value": i + 1,
									"label": res.data.Result[i].HOUSERADDRESS
								});
								_this.data_info.push([parseFloat(res.data.Result[i].LONGITUDE), parseFloat(res.data.Result[i].LATITUDE), "地址:" + res.data.Result[i].HOUSERADDRESS, res.data.Result[i].HOUSENO]);
							}
						}
						// 百度地图API功能	
						var map = new BMap.Map("allmap");
						map.centerAndZoom(new BMap.Point(120.292851,36.274877), 13);
						map.enableScrollWheelZoom(true);
						var opts = {
							width: 250, // 信息窗口宽度
							height: 80, // 信息窗口高度
							enableMessage: true //设置允许信息窗发送短息
						};
						var myIcon = new BMap.Icon("static/image/map_logo.png", new BMap.Size(48, 40));
						for(var i = 0; i < _this.data_info.length; i++) {
							var marker = new BMap.Marker(new BMap.Point(_this.data_info[i][0], _this.data_info[i][1]), {
								icon: myIcon
							}); // 创建标注
							var content = _this.data_info[i][2];
							map.addOverlay(marker); // 将标注添加到地图中
							var label = new BMap.Label(_this.data_info[i][3], {
								offset: new BMap.Size(20, -10)
							});
							marker.setLabel(label);
							addClickHandler(content, marker);
						}

						function addClickHandler(content, marker) {
							marker.addEventListener("click", function(e) {
								openInfo(content, e)
							});
						}

						function openInfo(content, e) {
							var p = e.target;
							var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
							var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
							map.openInfoWindow(infoWindow, point); //开启信息窗口
						}
						loading.close();
					})
					.catch(function(err) {
						console.log(err);
					});
			},
			// 用经纬度设置地图中心点
			theLocation() {
				var i = this.value;
				if(this.value != 0) {
					var map = new BMap.Map("allmap");
					map.centerAndZoom(new BMap.Point(120.292851,36.274877), 13);
					map.enableScrollWheelZoom(true);
					map.clearOverlays();
					var opts = {
						width: 250, // 信息窗口宽度
						height: 80, // 信息窗口高度
						enableMessage: true //设置允许信息窗发送短息
					};
					var myIcon = new BMap.Icon("static/image/map_logo.png", new BMap.Size(48, 40));
					var new_point = new BMap.Point(this.data_info[i - 1][0], this.data_info[i - 1][1]);
					var marker = new BMap.Marker(new_point, {
						icon: myIcon
					}); // 创建标注
					var content = this.data_info[i - 1][2];
					map.addOverlay(marker); // 将标注添加到地图中
					var label = new BMap.Label(this.data_info[i - 1][3], {
						offset: new BMap.Size(20, -10)
					});
					marker.setLabel(label);
					map.panTo(new_point);
					addClickHandler(content, marker);
					var point = new BMap.Point(this.data_info[i - 1][0], this.data_info[i - 1][1]);
					var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
					map.openInfoWindow(infoWindow, point); //开启信息窗口
					function addClickHandler(content, marker) {
						marker.addEventListener("click", function(e) {
							openInfo(content, e)
						});
					}

					function openInfo(content, e) {
						var p = e.target;
						var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
						var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
						map.openInfoWindow(infoWindow, point); //开启信息窗口
					}
				} else {
					this.baiduMap()
				}
			},
			mapLocation(id) {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				})
				var _this = this;
				this.$http({
						method: 'get',
						url: '/Back_HouseManage/GetPotision',
						params: {

						}
					})
					.then(function(res) {
						if(res.data.Result == null) {
							_this.options = [];
							_this.data_info = [];
						} else {
							_this.options = [{
								value: '0',
								label: '全部'
							}];
							for(var i = 0; i < res.data.Result.length; i++) {
								_this.options.push({
									"value": i + 1,
									"label": res.data.Result[i].HOUSERADDRESS
								});
								_this.data_info.push([parseFloat(res.data.Result[i].LONGITUDE), parseFloat(res.data.Result[i].LATITUDE), "地址:" + res.data.Result[i].HOUSERADDRESS, res.data.Result[i].HOUSENO]);
							}
						}
						var map = new BMap.Map("allmap");
						map.centerAndZoom(new BMap.Point(120.292851,36.274877), 13);
						map.enableScrollWheelZoom(true);
						map.clearOverlays();
						var opts = {
							width: 250, // 信息窗口宽度
							height: 80, // 信息窗口高度
							enableMessage: true //设置允许信息窗发送短息
						};
						var myIcon = new BMap.Icon("static/image/map_logo.png", new BMap.Size(48, 40));
						var new_point = new BMap.Point(_this.data_info[id][0], _this.data_info[id][1]);
						var marker = new BMap.Marker(new_point, {
							icon: myIcon
						}); // 创建标注
						var content = _this.data_info[id][2];
						map.addOverlay(marker); // 将标注添加到地图中
						var label = new BMap.Label(_this.data_info[id][3], {
							offset: new BMap.Size(20, -10)
						});
						marker.setLabel(label);
						map.panTo(new_point);
						addClickHandler(content, marker);
						var point = new BMap.Point(_this.data_info[id][0], _this.data_info[id][1]);
						var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
						map.openInfoWindow(infoWindow, point); //开启信息窗口
						function addClickHandler(content, marker) {
							marker.addEventListener("click", function(e) {
								openInfo(content, e)
							});
						}

						function openInfo(content, e) {
							var p = e.target;
							var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
							var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
							map.openInfoWindow(infoWindow, point); //开启信息窗口
						}
						loading.close();
					})
					.catch(function(err) {
						console.log(err);
					});
			}
		}
	}
</script>

<style scoped>
	.baidumap {
		width: 100%;
		height: 800px;
	}
</style>