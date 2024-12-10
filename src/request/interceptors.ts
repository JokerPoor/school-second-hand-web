import { AxiosInterceptorManager } from 'axios';
// import useUserStore from '@/store';

type FirstParameter<T> = T extends (first: infer P, ...args: any[]) => any ? P : never;

export const interceptorsReq: FirstParameter<AxiosInterceptorManager<any>['use']> = (config) => {
	// config.headers.Authorization = 'Basic ' + useUserStore().loginToken ?? (window as unknown as { loginToken: string }).loginToken;
	return config;
};

export const interceptorsRes: FirstParameter<AxiosInterceptorManager<any>['use']> = (response) => {
	if (response.status === 200) {
		if (response.data.code === 200) {
			// 成功
			return new Promise((resolve) => {
				resolve(response.data);
			});
		}
		return new Promise((_resolve, reject) => {
			// 异常
			reject(response);
		});
	} else {
		return new Promise((_resolve, reject) => {
			// 异常
			reject(response);
		});
	}
};
