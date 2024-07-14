// vite.config.js
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
	resolve: {
		alias: {
			'@/common': '/common'
			// 添加其他的别名
		}
	},
	plugins: [
		uni()
	],
	devServer: {
		port: 8085,
		disableHostCheck: true,
		proxy: {
			'/api': {
				target: 'http://192.168.156.218:8000',
				changeOrigin: true,
				secure: false,
				ws: false,
				rewrite: path => path.replace(/^\/api/, ''),
			}
		}
	}
});