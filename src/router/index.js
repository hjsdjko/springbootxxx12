	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import xueshengtousujianyi from '@/views/xueshengtousujianyi/list'
	import aboutus from '@/views/aboutus/list'
	import xueshengjiaofeixinxi from '@/views/xueshengjiaofeixinxi/list'
	import xuesheng from '@/views/xuesheng/list'
	import jiaoshijiaofei from '@/views/jiaoshijiaofei/list'
	import jiaoshi from '@/views/jiaoshi/list'
	import xueshengfankachongzhi from '@/views/xueshengfankachongzhi/list'
	import forum from '@/views/forum/list'
	import jiaoshijiaofeixinxi from '@/views/jiaoshijiaofeixinxi/list'
	import jiaoshifankachongzhi from '@/views/jiaoshifankachongzhi/list'
	import xueshengjiaofei from '@/views/xueshengjiaofei/list'
	import jiaofeileixing from '@/views/jiaofeileixing/list'
	import jiaoshitousujianyi from '@/views/jiaoshitousujianyi/list'
	import config from '@/views/config/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/news',
			name: '新闻资讯',
			component: news
		}
		,{
			path: '/xueshengtousujianyi',
			name: '学生投诉建议',
			component: xueshengtousujianyi
		}
		,{
			path: '/aboutus',
			name: '关于我们',
			component: aboutus
		}
		,{
			path: '/xueshengjiaofeixinxi',
			name: '学生缴费信息',
			component: xueshengjiaofeixinxi
		}
		,{
			path: '/xuesheng',
			name: '学生',
			component: xuesheng
		}
		,{
			path: '/jiaoshijiaofei',
			name: '教师缴费',
			component: jiaoshijiaofei
		}
		,{
			path: '/jiaoshi',
			name: '教师',
			component: jiaoshi
		}
		,{
			path: '/xueshengfankachongzhi',
			name: '学生饭卡充值',
			component: xueshengfankachongzhi
		}
		,{
			path: '/forum',
			name: '我的发布',
			component: forum
		}
		,{
			path: '/jiaoshijiaofeixinxi',
			name: '教师缴费信息',
			component: jiaoshijiaofeixinxi
		}
		,{
			path: '/jiaoshifankachongzhi',
			name: '教师饭卡充值',
			component: jiaoshifankachongzhi
		}
		,{
			path: '/xueshengjiaofei',
			name: '学生缴费',
			component: xueshengjiaofei
		}
		,{
			path: '/jiaofeileixing',
			name: '缴费类型',
			component: jiaofeileixing
		}
		,{
			path: '/jiaoshitousujianyi',
			name: '教师投诉建议',
			component: jiaoshitousujianyi
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
