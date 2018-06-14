import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 把路由对应的组件定义成异步组件 
const Login = resolve => {
	require.ensure(['@/components/login.vue'], () => {
		resolve(require('@/components/login.vue'))
	})
}
const Index = resolve => {
	require.ensure(['@/components/index.vue'], () => {
		resolve(require('@/components/index.vue'))
	})
}
const Totalpages = resolve => {
	require.ensure(['@/components/totalpages.vue'], () => {
		resolve(require('@/components/totalpages.vue'))
	})
}
const PersonalManagement = resolve => {
	require.ensure(['@/components/personalManagement.vue'], () => {
		resolve(require('@/components/personalManagement.vue'))
	})
}
const PersonalChart = resolve => {
	require.ensure(['@/components/personalChart.vue'], () => {
		resolve(require('@/components/personalChart.vue'))
	})
}
const PersonalChartYear = resolve => {
	require.ensure(['@/components/personalChartYear.vue'], () => {
		resolve(require('@/components/personalChartYear.vue'))
	})
}
const PersonalChartMonth = resolve => {
	require.ensure(['@/components/personalChartMonth.vue'], () => {
		resolve(require('@/components/personalChartMonth.vue'))
	})
}
const MemberManagement = resolve => {
	require.ensure(['@/components/memberManagement.vue'], () => {
		resolve(require('@/components/memberManagement.vue'))
	})
}
const MemberChartYear = resolve => {
	require.ensure(['@/components/memberChartYear.vue'], () => {
		resolve(require('@/components/memberChartYear.vue'))
	})
}
const MemberChartMonth = resolve => {
	require.ensure(['@/components/memberChartMonth.vue'], () => {
		resolve(require('@/components/memberChartMonth.vue'))
	})
}
const EquipmentManagement = resolve => {
	require.ensure(['@/components/equipmentManagement.vue'], () => {
		resolve(require('@/components/equipmentManagement.vue'))
	})
}
const HealthyManagement = resolve => {
	require.ensure(['@/components/healthyManagement.vue'], () => {
		resolve(require('@/components/healthyManagement.vue'))
	})
}
const HealthyChart = resolve => {
	require.ensure(['@/components/healthyChart.vue'], () => {
		resolve(require('@/components/healthyChart.vue'))
	})
}
const HealthyManagementInformation = resolve => {
	require.ensure(['@/components/healthyManagementInformation.vue'], () => {
		resolve(require('@/components/healthyManagementInformation.vue'))
	})
}
const SensorManagement = resolve => {
	require.ensure(['@/components/sensorManagement.vue'], () => {
		resolve(require('@/components/sensorManagement.vue'))
	})
}
const WatchManagement = resolve => {
	require.ensure(['@/components/watchManagement.vue'], () => {
		resolve(require('@/components/watchManagement.vue'))
	})
}
const WatchChart = resolve => {
	require.ensure(['@/components/watchChart.vue'], () => {
		resolve(require('@/components/watchChart.vue'))
	})
}
const DiseaseChart = resolve => {
	require.ensure(['@/components/diseaseChart.vue'], () => {
		resolve(require('@/components/diseaseChart.vue'))
	})
}
const DiseaseRegionChart = resolve => {
	require.ensure(['@/components/diseaseRegionChart.vue'], () => {
		resolve(require('@/components/diseaseRegionChart.vue'))
	})
}
const DiseaseAgeChart = resolve => {
	require.ensure(['@/components/diseaseAgeChart.vue'], () => {
		resolve(require('@/components/diseaseAgeChart.vue'))
	})
}
const TurnoverChart = resolve => {
	require.ensure(['@/components/turnoverChart.vue'], () => {
		resolve(require('@/components/turnoverChart.vue'))
	})
}
const ConsumptionChart = resolve => {
	require.ensure(['@/components/consumptionChart.vue'], () => {
		resolve(require('@/components/consumptionChart.vue'))
	})
}
const RegistrationAgreement = resolve => {
	require.ensure(['@/components/registrationAgreement.vue'], () => {
		resolve(require('@/components/registrationAgreement.vue'))
	})
}
const RegistrationAgreementEditor = resolve => {
	require.ensure(['@/components/registrationAgreementEditor.vue'], () => {
		resolve(require('@/components/registrationAgreementEditor.vue'))
	})
}
const PurchaseAgreement = resolve => {
	require.ensure(['@/components/purchaseAgreement.vue'], () => {
		resolve(require('@/components/purchaseAgreement.vue'))
	})
}
const PurchaseAgreementEditor = resolve => {
	require.ensure(['@/components/purchaseAgreementEditor.vue'], () => {
		resolve(require('@/components/purchaseAgreementEditor.vue'))
	})
}
const StoreManagement = resolve => {
	require.ensure(['@/components/storeManagement.vue'], () => {
		resolve(require('@/components/storeManagement.vue'))
	})
}
const StoreChartYear = resolve => {
	require.ensure(['@/components/storeChartYear.vue'], () => {
		resolve(require('@/components/storeChartYear.vue'))
	})
}
const StoreChartMonth = resolve => {
	require.ensure(['@/components/storeChartMonth.vue'], () => {
		resolve(require('@/components/storeChartMonth.vue'))
	})
}
const StoreManagementMap = resolve => {
	require.ensure(['@/components/storeManagementMap.vue'], () => {
		resolve(require('@/components/storeManagementMap.vue'))
	})
}
const StoreNavigation = resolve => {
	require.ensure(['@/components/storeNavigation.vue'], () => {
		resolve(require('@/components/storeNavigation.vue'))
	})
}
const NavigationalMap = resolve => {
	require.ensure(['@/components/navigationalMap.vue'], () => {
		resolve(require('@/components/navigationalMap.vue'))
	})
}

let router = new Router({
	routes: [{
			path: '/',
			component: Totalpages,
			children: [{
				path: '',
				component: Index
			}]
		}, {
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/personalManagement',
			component: Totalpages,
			children: [{
					path: '',
					component: PersonalManagement
				},
				{
					path: 'personalChartYear',
					component: PersonalChartYear,
				},
				{
					path: 'personalChartMonth',
					component: PersonalChartMonth,
				}
			]
		},
		{
			path: '/memberManagement',
			component: Totalpages,
			children: [{
					path: '',
					component: MemberManagement
				},
				{
					path: 'memberChartYear',
					component: MemberChartYear,
				},
				{
					path: 'memberChartMonth',
					component: MemberChartMonth,
				}
			]
		},
		{
			path: '/equipmentManagement',
			component: Totalpages,
			children: [{
					path: '',
					component: EquipmentManagement
				},
				//    {
				//      path: 'personalChart', component: PersonalChart,
				//    },
			]
		},
		{
			path: '/personalChart/personalChartYear',
			component: Totalpages,
			children: [{
					path: '',
					component: PersonalChartYear,
				},
				{
					path: '/personalChart/personalChartMonth',
					component: PersonalChartMonth,
				},
			]
		},
		{
			path: '/healthyManagement',
			component: Totalpages,
			children: [{
					path: '',
					component: HealthyManagement
				},
				{
					path: 'healthyChart',
					component: HealthyChart,
				}, {
					path: 'healthyManagementInformation',
					name: 'healthyManagementInformation',
					component: HealthyManagementInformation,
				}
			]
		},
		{
			path: '/sensorManagement',
			component: Totalpages,
			children: [{
					path: '',
					component: SensorManagement
				},
				//    {
				//      path: 'personalChart', component: PersonalChart,
				//    },
			]
		},
		{
			path: '/watchManagement',
			component: Totalpages,
			children: [{
					path: '',
					component: WatchManagement
				},
				{
					path: 'watchChart',
					component: WatchChart,
				}
			]
		},
				{
			path: '/diseaseChart/diseaseRegionChart',
			component: Totalpages,
			children: [{
					path: '',
					component: DiseaseRegionChart,
				},
				{
					path: '/diseaseChart/diseaseAgeChart',
					component: DiseaseAgeChart,
				},
			]
		},
		{
			path: '/turnoverChart',
			component: Totalpages,
			children: [{
					path: '',
					component: TurnoverChart
				},
				//    {
				//      path: 'personalChart', component: PersonalChart,
				//    },
			]
		},
		{
			path: '/consumptionChart',
			component: Totalpages,
			children: [{
					path: '',
					component: ConsumptionChart
				},
				//    {
				//      path: 'personalChart', component: PersonalChart,
				//    },
			]
		},
		{
			path: '/registrationAgreement',
			component: Totalpages,
			children: [{
					path: '',
					component: RegistrationAgreement
				},
				{
					path: 'registrationAgreementEditor',
					component: RegistrationAgreementEditor,
				},
			]
		}, {
			path: '/purchaseAgreement',
			component: Totalpages,
			children: [{
					path: '',
					component: PurchaseAgreement
				},
				{
					path: 'purchaseAgreementEditor',
					component: PurchaseAgreementEditor,
				},
			]
		},
		{
			path: '/storeManagement',
			component: Totalpages,
			children: [{
					path: '',
					component: StoreManagement
				},
				{
					path: 'storeManagementMap',
					name: 'storeManagementMap',
					component: StoreManagementMap,
				},
				{
					path: 'storeChartYear',
					component: StoreChartYear,
				},
				{
					path: 'storeChartMonth',
					component: StoreChartMonth,
				},
			]
		},
		{
			path: '/storeNavigation',
			component: Totalpages,
			children: [{
					path: '',
					component: StoreNavigation
				},
				{
					path: 'navigationalMap',
					name: 'navigationalMap',
					component: NavigationalMap,
				},
			]
		}
	]
})
//访问之前，都检查下是否登录了  
router.beforeEach((to, from, next) => {
	if(to.path.startsWith('/login')) {
		window.sessionStorage.removeItem('access-token')
		next()
	} else {
		let token = window.sessionStorage.getItem('access-token')
		if(!token) {
			next({
				path: '/login'
			})
		} else {
			next()
		}
	}
})
export default router