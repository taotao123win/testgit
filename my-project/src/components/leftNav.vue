<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo"  @select="handleSelect" 
  	unique-opened  router background-color="#41749C" text-color="#FFFFFF" active-text-color="#FFFFFF">
   <el-menu-item index="/">
        <i class="el-icon-third-zhuye"></i>
        <span slot="title">首页</span>
     </el-menu-item>
   <el-submenu index="information">
        <template slot="title">
          <i class="el-icon-third-wenjianjia"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item index="/personalManagement">个人信息管理</el-menu-item>
        <el-menu-item index="/memberManagement">会员信息管理</el-menu-item>
        <el-menu-item index="/personalChart/personalChartYear">用户信息统计</el-menu-item>
      </el-submenu>
      <el-menu-item index="/equipmentManagement">
        <i class="el-icon-third-dianpu"></i>
        <span slot="title">设备管理</span>
     </el-menu-item>
      <el-submenu index="parameter">
        <template slot="title">
          <i class="el-icon-third-weibiaoti11"></i>
          <span>健康信息统计</span>
        </template>
        <el-menu-item index="/healthyManagement">小屋健康参数</el-menu-item>
<!--        <el-menu-item index="/sensorManagement">传感器参数管理</el-menu-item>-->
        <el-menu-item index="/watchManagement">智能手环参数</el-menu-item>
      </el-submenu>
            <el-submenu index="intelligence">
        <template slot="title">
          <i class="el-icon-third-weibiaoti11"></i>
          <span>人工智能统计</span>
        </template>
        <el-menu-item index="/diseaseChart/diseaseRegionChart">疾病统计</el-menu-item>
        <el-menu-item index="/turnoverChart">营业额统计</el-menu-item>
        <el-menu-item index="/consumptionChart">消费群体统计</el-menu-item>
      </el-submenu>
      <el-submenu index="agreement">
        <template slot="title">
          <i class="el-icon-third-yonghuxieyi"></i>
          <span>协议管理</span>
        </template>
        <el-menu-item index="/registrationAgreement">注册协议</el-menu-item>
        <el-menu-item index="/purchaseAgreement">购买协议</el-menu-item>
      </el-submenu>
      <el-menu-item index="/storeManagement">
        <i class="el-icon-third-dianpu"></i>
        <span slot="title">理疗小屋分店管理</span>
     </el-menu-item>
     <!--<el-menu-item index="/storeNavigation">
        <i class="el-icon-third-daohang"></i>
        <span slot="title">分店导航</span>
     </el-menu-item>-->
</el-menu>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {
     activeIndex:''
    }
  },
  mounted: function () {
  	     if(this.$route.matched[0].path==''){
  	     	this.activeIndex = '/'
  	     }
          else{
         	this.activeIndex=this.$route.matched[0].path
         }
       },
   methods: {
       handleSelect(key, keyPath) {
       
      }
    }
}
</script>


<style> 
  .el-aside {
    background-color: #41749C;
  }
  
  .el-main {
    background-color: #FFFFFF;
    padding:0;
  }
.el-submenu__title i {
    color: #FFFFFF !important;
}
.el-menu-item.is-active {
    background-color: #578CB4 !important;
}
.el-menu-item i {
    color: #FFFFFF !important;
}
.el-menu {
    border:none;
    }
</style>
