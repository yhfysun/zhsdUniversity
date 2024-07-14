// 动态 批量导入模块

let modules = {}
/* @vite-ignore */
const files = import.meta.glob("./*.js");

void async function main() {
	for (const path in files) {
		// #ifdef H5
		await import(path).then(module => {
			for (const i in module) {
				modules[i] = module[i]
			}
		})
		// #endif
		// 微信小程序
		// #ifndef H5
		console.log("path", path)
		const module = await require(path)
		console.log("module", module)
		for (const fun in module) {
			modules[fun] = module[fun]
		}
		console.log("modules", modules)
		// #endif
	}
}()
export default modules