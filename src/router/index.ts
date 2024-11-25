import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

import { afterNav, beforeNav } from './navigate';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/login-register',
	},
	{
		path: '/login-register',
		name: 'LoginRegister',
		component: () => import('@/pages/login-register/index.vue'),
		meta: {
			keepAlive: false,
			title: 'login-register',
			transition: 'van-fade',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	},
];

export const getKeepAliveRoutes = (routes: RouteRecordRaw[]) => {
	let keepAliveRoutes: string[] = [];

	for (const route of routes) {
		if (route.meta && route.meta.keepAlive && route.name) {
			keepAliveRoutes.push(String(route.name));
		}

		if (route.children) {
			const childRoutes = getKeepAliveRoutes(route.children);
			keepAliveRoutes = keepAliveRoutes.concat(childRoutes);
		}
	}

	return keepAliveRoutes;
};

export const keepAliveRoutes = getKeepAliveRoutes(routes);

export const router = createRouter({
	history: createWebHashHistory('/'),
	routes,
});

router.beforeEach(beforeNav);
router.afterEach(afterNav);

export default router;
